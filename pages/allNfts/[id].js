import React from 'react';
import HerosectionAllNfts from '../../src/components/AllNfts/HerosectionAllNfts';
import Nfts from '../../src/components/AllNfts/Nfts';
import Header from '../../src/components/Layout/Header';
import Footer from '../../src/components/Layout/Footer';
import LoadMore from '../../src/components/Common/LoadMore';
import WithHeaderFooter from '../../src/components/Common/WithHeaderFooter';
const AllNfts = () => {
  return (
    <div>
      <WithHeaderFooter>
        <HerosectionAllNfts />
        <Nfts />
        <LoadMore />
      </WithHeaderFooter>
    </div>
  );
};

export default AllNfts;
