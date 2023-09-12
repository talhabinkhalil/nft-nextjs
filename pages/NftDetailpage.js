import React from 'react';
import LiveAuctionCard from '../src/components/Common/LiveAuctionCard';
import Header from '../src/components/Layout/Header';
import BidHistroy from '../src/components/NftDetailPage/BidHistroy';
import Details from '../src/components/NftDetailPage/Details';
import HeroDetail from '../src/components/NftDetailPage/HeroDetail';
import ItemActivity from '../src/components/NftDetailPage/ItemActivity';
import PriceHistory from '../src/components/NftDetailPage/PriceHistory';
import Footer from '../src/components/Layout/Footer';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
const NftDetailpage = () => {
  return (
    <div>
      <WithHeaderFooter >
      <HeroDetail />
      <div className="container mx-auto  max-w-[1440px]">
        <div className="container mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BidHistroy />   
        <div>
        <PriceHistory />
        </div>
      </div>
      </div>   
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
        <ItemActivity />
        <div className=''>
          <Details />
        </div>
          </div>
          </div>
           
       
        <div className="container mx-auto pt-20 pb-20">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Live Auctions</h1>
            <p className="font-semibold border-b-2 border-[#5142FC]">
              Explore More
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pt-16">
            <LiveAuctionCard />
            <LiveAuctionCard />
            <LiveAuctionCard />
            <LiveAuctionCard />
          </div>
        </div> 
      </div>
    </WithHeaderFooter >

    </div>
  );
};

export default NftDetailpage;
