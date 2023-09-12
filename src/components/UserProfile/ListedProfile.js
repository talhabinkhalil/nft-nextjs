import {
  useActiveListings,
  useAddress,
  useListings,
} from '@thirdweb-dev/react';
import React, { useEffect, useState } from 'react';
import useGetMarketPlaceContract from '../../hooks/thirdWeb-hooks/useGetMarketPlaceContract';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import store from '../../../redux-toolkit/store';
import isEmpty from '../../utils/isEmpty';
import { getActiveListingsOfMarketPlace } from '../../../services/third-web/profileMpActiveListing';
import { useDispatch } from 'react-redux';
import useGetCreatedItems from '../../hooks/redux-toolkit/useGetCreatedItems';
import { setCreatedItems } from '../../../redux-toolkit/slices/profileSlice';
import CollectionDetailCard from '../CollectionDetail/CollectionDetailCard';
import useProfileFilters from '../../hooks/redux-toolkit/useProfileFilters';
import { getDirectInActiveListings } from '../../../services/third-web/getInActiveDirectItems';

const ListedProfile = () => {
  const { address } = useGetAddress();
  const mpContract = useGetMarketPlaceContract();
  const { data: allListings } = useListings(mpContract, { seller: address });

  const { data: activeListings, isLoading } = useActiveListings(mpContract, {
    seller: address,
  });
  const [state, setState] = useState(1);
  const activeItems = useGetCreatedItems();
  const { filters, setFilters } = useProfileFilters();

  // console.log('Data from hook ', data);

  const getEvents = async (data, contractObject) => {
    const newData = structuredClone(data);
    try {
      const address = store.getState()?.authSlice?.address;
      const eventName = 'NewSale';

      const options = {
        fromBlock: 0,
        toBlock: 'latest', // can also pass "latest"
        order: 'desc',
      };

      // const event = await mpContract?.events?.getEvents(eventName, options);
      // return event;
      const eventsData = [];
      const eventsCaught = await Promise.all(
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

  const handleIncrement = () => {
    setState(state + 1);
  };

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

  // const getContractId = (data) => {
  //   const contractId = {};

  //   for (let i = 0; i < data.length; i++) {
  //     if (
  //       !contractId[
  //         `${data[i].assetContractAddress.toLocaleLowerCase()}-${
  //           data[i].asset?.id
  //         }`
  //       ]
  //     ) {
  //       contractId[
  //         `${data[i].assetContractAddress.toLocaleLowerCase()}-${
  //           data[i].asset?.id
  //         }`
  //       ] = true;
  //     }
  //   }
  //   return contractId;
  // };

  const getMpActiveListing = async () => {
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
  };

  //Get active listings
  // const getMarketPlaceActiveListing = async () => {
  //   console.log('MpContract, ', mpContract);
  //   const activeListings = await mpContract?.getActiveListings({
  //     seller: address,
  //   });

  //   console.log('activeListings', activeListings);
  // };

  // useEffect(() => {
  //   if (mpContract && address) {
  //     // getMpActiveListing(); // used for direct listings listed by owner
  //     console.log('activeItems', activeItems);

  //     (async () => {
  //       const activeListingData = await getActiveListingsOfMarketPlace(address);
  //       dispatch(setCreatedItems(activeListingData));
  //     })();
  //   }
  // }, [mpContract, address]);

  useEffect(() => {
    getDirectInActiveListings();
  }, []);

  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
      {!isEmpty(filters)
        ? 'filters data here'
        : isEmpty(activeListings)
        ? 'Record being fetched'
        : activeListings?.map((data) => (
            <CollectionDetailCard data={data} key={data?.tokenId?._hex} />
          ))}
    </div>
  );
};

export default ListedProfile;
