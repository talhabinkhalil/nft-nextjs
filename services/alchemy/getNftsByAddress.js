import { Alchemy, Network } from 'alchemy-sdk';
import { config } from '../../constants/Alchemy/config';
import {
  setAlchemyKey,
  setUsersCollectedNftsMetaData,
} from '../../redux-toolkit/slices/profileSlice';
import store from '../../redux-toolkit/store';
import { toast } from 'react-hot-toast';
import { getAddressIdFromString } from '../../src/utils/stringOperations';
import isEmpty from '../../src/utils/isEmpty';
import {
  startPrimaryLoadingFunc,
  startSeconadaryLoadingFunc,
  stopPrimaryLoadingFunc,
  stopSeconadaryLoadingFunc,
} from '../../src/utils/useLoadingsFunc';
import { concatArrays } from '../../src/utils/arrayMethods';

const alchemy = new Alchemy(config);

export const getEvents = async (contractObjects, contracts, addressWithId) => {
  try {
    const address = store.getState()?.authSlice?.address;
    const eventName = 'Transfer';

    const options = {
      fromBlock: 0,
      toBlock: 'latest', // can also pass "latest"
      order: 'desc',

      filters: {
        to: address,
      },
    };
    const eventsOfAlchemyData = await Promise.all(
      addressWithId.map((d) => {
        return contracts[
          getAddressIdFromString(d).contractAddress
        ]?.events.getEvents(eventName, {
          ...options,
          filters: {
            ...options.filters,
            tokenId: getAddressIdFromString(d).tokenId,
          },
        });
      })
    );

    return eventsOfAlchemyData;
  } catch (error) {
    toast.error(error);
  }
};

export const getContractObject = async (addresses) => {
  const contractsObject = {};
  const sdk = store.getState()?.thirdWebConfigSlice?.readSdk;

  const contracts = await Promise.all(
    addresses?.map(async (d) => {
      contractsObject[d?.toLowerCase()] = await sdk?.getContract(
        `${d}`,
        'nft-collection'
      );
      return await sdk?.getContract(`${d}`, 'nft-collection');
    })
  );

  return { contracts, contractsObject };
};

export const getNftsOwnerFromAclhemy = async (address, pageKey, dispatch) => {
  try {
    const filteredData = {};
    const contractAddressWithId = {};
    const data = await alchemy.nft.getNftsForOwner(address, {
      pageSize: 10,
      pageKey,
    });
    const nfts = data?.ownedNfts;

    if (isEmpty(data?.pageKey)) {
      dispatch(setAlchemyKey('last'));
    } else {
      dispatch(setAlchemyKey(data?.pageKey));
    }
    for (let i = 0; i < nfts.length; i++) {
      if (!filteredData[`${nfts[i].contract.address}`]) {
        filteredData[nfts[i].contract.address] = [nfts[i].tokenId];
      } else if (filteredData[`${nfts[i].contract.address}`]) {
        filteredData[nfts[i].contract.address].push(nfts[i].tokenId);
      }
      if (
        !contractAddressWithId[
          `${nfts[i].contract.address.toLocaleLowerCase()}-${nfts[i].tokenId}`
        ]
      ) {
        contractAddressWithId[
          `${nfts[i].contract.address.toLocaleLowerCase()}-${nfts[i].tokenId}`
        ] = true;
      }
    }
    return { filteredData, contractAddressWithId };
  } catch (error) {}
};

export const getNftsByAddress =
  (address, pageKey = '', existedData) =>
  async (dispatch) => {
    const tab = store?.getState()?.profileSlice?.selectedTab;
    try {
      if (isEmpty(existedData)) {
        startPrimaryLoadingFunc();
      } else if (!isEmpty(existedData)) {
        startSeconadaryLoadingFunc();
      }
      const { filteredData, contractAddressWithId } =
        await getNftsOwnerFromAclhemy(address, pageKey, dispatch);
      const { contracts, contractsObject } = await getContractObject(
        Object.keys(filteredData)
      );

      if (tab === 'collected') {
        const events = await getEvents(
          contracts,
          contractsObject,
          Object.keys(contractAddressWithId)
        );
        const filteredNotNull = filterNullAddress(events);
        const metaData = await getOwnedNftsMetaData(
          filteredNotNull,
          contractsObject
        );
        dispatch(setUsersCollectedNftsMetaData(metaData));
      } else {
        const eventsFromNullAddress = await getTokensMintedTo(
          contractsObject,
          Object.keys(contractAddressWithId)
        );
        const singleArrayData = concatArrays(...eventsFromNullAddress);
        const metaData = await getOwnedNftsMetaData(
          singleArrayData,
          contractsObject
        );
        dispatch(setUsersCollectedNftsMetaData(metaData));
      }
    } catch (error) {
      console.log(error);
      // toast.error('Something went wrong while fetching Data');
    } finally {
      stopPrimaryLoadingFunc();
      stopSeconadaryLoadingFunc();
    }
  };

const getNftForOwnerAlchemy = () => {};

const filterNullAddress = (data) => {
  const transferedMinted = [];
  const uniqueIdsData = {};
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (
          data[i][j]?.data?.from.toString() !==
          '0x0000000000000000000000000000000000000000'
        ) {
          if (
            !uniqueIdsData[
              `${data[i][j].transaction?.address?.toLowerCase()}-${Number(
                data[i][j]?.data?.tokenId?._hex
              )}`
            ]
          ) {
            uniqueIdsData[
              `${data[i][j].transaction?.address?.toLowerCase()}-${Number(
                data[i][j]?.data?.tokenId?._hex
              )}`
            ] = true;
            transferedMinted.push(data[i][j]);
          }
        }
      }
    }
    return transferedMinted;
  } else return null;
};

const filterNullAddressSingleArray = (data) => {
  const transferedMinted = [];
  for (let j = 0; j < data.length; j++) {
    if (
      data[j]?.data?.from.toString() !==
      '0x0000000000000000000000000000000000000000'
    ) {
      transferedMinted.push(data[j]);
    }
  }
  return transferedMinted;
};

const getOwnedNftsMetaData = async (filteredData, contractsObject) => {
  if (Array.isArray(filteredData)) {
    const metaData = await Promise.all(
      filteredData?.map(async (d) => {
        return contractsObject[d?.transaction?.address?.toLowerCase()]?.get(
          d?.data?.tokenId._hex
        );
      })
    );
    return metaData;
  }
};

const getTokensMintedTo = async (contracts, contractAddressWithId) => {
  try {
    const address = store.getState()?.authSlice?.address;
    const eventName = 'Transfer';

    const options = {
      fromBlock: 0,
      toBlock: 'latest', // can also pass "latest"
      order: 'desc',

      // Configure event filters (filter on indexed event parameters)
      filters: {
        to: address,
        from: '0x0000000000000000000000000000000000000000',
        // closer: '0x8286b256493bAC3686df23927774B7892aD4EA2f',
        // from: !nullAddress,
        // to: address,
      },
    };

    const eventsCaught = await Promise.all(
      contractAddressWithId.map((d) => {
        return contracts[
          getAddressIdFromString(d).contractAddress
        ]?.events?.getEvents(eventName, {
          ...options,
          filters: {
            ...options.filters,
            tokenId: getAddressIdFromString(d).tokenId,
          },
        });
      })
    );

    return eventsCaught;
  } catch (error) {
    toast.error(error);
  }
};

export const getOwnedNfts = async (address) => {};
