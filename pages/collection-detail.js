import React, { useEffect } from 'react';
import CollectionDetailCard from '../src/components/CollectionDetail/CollectionDetailCard';
import CollectionDetailFilters from '../src/components/CollectionDetail/CollectionDetailFilters';
// import CollectionDetailHeader from '../src/components/CollectionDetail/CollectionDetailHeader';
import Footer from '../src/components/Layout/Footer';
import Header from '../src/components/Layout/Header';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
import { useDispatch } from 'react-redux';
import { getNftsByAddress } from '../services/alchemy/getNftsByAddress';
import useGetAddress from '../src/hooks/thirdWeb-hooks/useGetAddress';
import LoadMore from '../src/components/Common/LoadMore';
import useGetCollectedNfts from '../src/hooks/redux-toolkit/useGetCollectedNfts';

const CollectionDetail = () => {
  return (
    <div>
      <WithHeaderFooter>
        {/* <CollectionDetailHeader /> */}
        <div className="container max-w-[1320px] mx-auto pt-8">
          <div className="flex justify-between">
            <div>Filter</div>
            {/* <div>Items</div> */}
          </div>
          <div className="flex gap-6 pt-8">
            <CollectionDetailFilters />
            <div className="flex flex-wrap gap-[0px] h-fit">
              <CollectionDetailCard />
              <CollectionDetailCard />
              <CollectionDetailCard />
              <CollectionDetailCard />
            </div>
          </div>
        </div>
        <LoadMore />
      </WithHeaderFooter>
    </div>
  );
};

export default CollectionDetail;
