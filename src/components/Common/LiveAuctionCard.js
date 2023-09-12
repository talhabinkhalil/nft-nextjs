import React from 'react';
import Image from 'next/image';
import livecard from '../../../public/livecard.png';
import creator from '../../../public/creator.png';
import FavrouiteIcon from '../Icons/FavrouiteIcon';
import Flame from '../Icons/Flame';
import BidBlue from '../Icons/BidBlue';
const LiveAuctionCard = () => {
  return (
    <>
      <div className="group w-[330px] h-[442px] cursor-pointer p-5 bg-[#FFFFFF] rounded-[20px]  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
        <div className="relative">
          <div className="absolute top-4 right-4 bg-[#14141F] p-1 px-3 rounded-xl flex gap-2 item-center">
            <FavrouiteIcon />
            <p className="text-white text-sm font-bold leading-6">100</p>
          </div>
          <Image
            alt="livecard"
            className="rounded-[20px] w-100"
            src={livecard}
           style={{width:"100%"}}
          />
          <div className="absolute bottom-2 left-[80px] flex gap-2 items-center bg-white p-2 px-5 rounded-xl">
            <Flame />
            <h1 className="text-[#1F1F2C] text-sm font-bold leading-6">
              05:12:07:45
            </h1>
          </div>
        </div>
        <div className="invisible group-hover:visible absolute top-40 right-24 bg-white p-3 px-7 rounded-3xl flex items-center gap-2">
          <BidBlue className="fill-[#5142FC]" />
          <p className="text-[#14141F] text-[15px] font-bold leading-[22px]">
            Place Bid
          </p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <h2 className="text-[#1F1F2C] text-lg font-bold">
            "Hamlet Contemplates ...
          </h2>
          <div className="bg-[#5142FC] px-3 py-1 text-white text-xs font-bold leading-5 rounded-[10px]">
            BSC
          </div>
        </div>
        <div className="pt-3 flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              alt="creator"
              src={creator}
              className="rounded-2xl"
              width="44"
              height="44"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[#7A798A] text-[13px] leading-5">Creator</p>
              <h1 className="text-[#1F1F2C] text-[15px] leading-[22px] font-bold">
                SalvadorDali
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[#7A798A] text-[13px]">Current Bid</p>
            <h1 className="text-[#1F1F2C] text-lg font-bold uppercase">
              4.89 eTH
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveAuctionCard;
