import { setInActiveDirectItems } from '../../redux-toolkit/slices/profileSlice';
import store from '../../redux-toolkit/store';
import isEmpty from '../../src/utils/isEmpty';
import { getAddressFunc } from '../../src/utils/useAddressFunc';
import {
  startPrimaryLoadingFunc,
  stopPrimaryLoadingFunc,
} from '../../src/utils/useLoadingsFunc';
import { marketPlaceObjectFunc } from '../../src/utils/useMarketPlaceObject';

const getContractObject = async (addresses) => {
  const contractsObject = {};
  const sdk = store.getState()?.thirdWebConfigSlice?.readSdk;
  const contracts = await Promise.all(
    addresses?.map(async (d) => {
      if (!contractsObject[d?.assetContractAddress?.toLowerCase()]) {
        contractsObject[d?.assetContractAddress?.toLowerCase()] =
          await sdk?.getContract(
            `${d?.assetContractAddress}`,
            'nft-collection'
          );
      }
      return await sdk?.getContract(
        `${d?.assetContractAddress}`,
        'nft-collection'
      );
    })
  );

  return { contracts, contractsObject };
};

const getEvents = async (data, contractObject) => {
  const newData = structuredClone(data);
  const mpContract = await marketPlaceObjectFunc();

  try {
    const address = store.getState()?.authSlice?.address;
    const eventName = 'NewSale';

    const options = {
      fromBlock: 0,
      toBlock: 'latest', // can also pass "latest"
      order: 'desc',
    };

    await Promise.all(
      newData.map(async (d, index) => {
        await mpContract.events
          ?.getEvents(eventName, {
            ...options,
            filters: {
              listingId: d?.id,
            },
          })
          .then((res) => {
            if (!isEmpty(res)) {
              newData.splice(index, 1);
            }
          });
      })
    );

    return newData;

    // const eventsOfAlchemyData = await Promise.all(
    //   addressWithId.map((d) => {
    //     return contracts[
    //       getAddressIdFromString(d).contractAddress
    //     ]?.events.getEvents(eventName, {
    //       ...options,
    //       filters: {
    //         ...options.filters,
    //         tokenId: getAddressIdFromString(d).tokenId,
    //       },
    //     });
    //   })
    // );

    // return eventsOfAlchemyData;
  } catch (error) {
    // toast.error(error);
  }
};

const getDirectInActiveListings = async () => {
  // startPrimaryLoadingFunc();
  const mpContract = await marketPlaceObjectFunc();
  const address = getAddressFunc();
  const ownedActiveListings = await mpContract.getAllListings();
  const mySellerAddress = ownedActiveListings.filter((d) => {
    return (
      d.sellerAddress.toLowerCase() == address?.toLowerCase() &&
      new Date() > new Date(d?.secondsUntilEnd?._hex * 1000) &&
      d?.type == 0
    );
  });
  const { contractsObject, contracts } = await getContractObject(
    mySellerAddress
  );

  const isOwnerArray = [];
  const isOwner = await Promise.all(
    mySellerAddress.map(async (el) => {
      return await contractsObject[el?.assetContractAddress?.toLowerCase()]
        ?.call('ownerOf', el?.asset?.id)
        .then((res) => res.toLowerCase() == address && isOwnerArray.push(el));
    })
  );

  const eventsCaught = await getEvents(isOwnerArray, contractsObject);

  store.dispatch(setInActiveDirectItems(eventsCaught));
};

export { getDirectInActiveListings };
