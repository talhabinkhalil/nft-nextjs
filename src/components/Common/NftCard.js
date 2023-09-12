import React from 'react';
import livecard from '../../../public/livecard.png';
import FavrouiteIcon from '../Icons/FavrouiteIcon';
import creator from '../../../public/creator.png';
import Image from 'next/image';
import BidBlue from '../Icons/BidBlue';
import ReloadIcon from '../Icons/ReloadIcon';
export const NftCard = () => {
  return (
    <div>
      <div className="group/card cursor-pointer p-4 relative bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
        <Image
          alt="livecard"
          className="rounded-3xl w-100"
          src={livecard}
          style={{ width: '100%' }}
        />
        <div className=" absolute top-7 left-7 bg-[#FFBD0C] p-1 px-4 rounded-2xl flex gap-1">
          <p className="text-black">Coming soon</p>
        </div>
        <div className=" absolute top-7 right-7 bg-black p-1 px-4 rounded-2xl flex gap-1">
          <FavrouiteIcon />
          <p className="text-white">100</p>
        </div>

        <div className="flex justify-between pt-3">
          <h2 className="font-bold text-lg">"Hamlet Contemplates ...</h2>
          <div className="bg-[#5142FC] px-3 py-1 text-white rounded-full">
            BSC
          </div>
        </div>
        <div className="pt-3 flex justify-between">
          <div className="inline-flex gap-2">
            <Image
              alt="creator"
              src={creator}
              className="rounded-2xl"
              width="55"
              height="20"
            />
            <div>
              <p className="text-[#7A798A] text-sm">Creator</p>
              <h1 className="font-bold ">SalvadorDali</h1>
            </div>
          </div>
          <div className="">
            <p className="text-[#7A798A] text-sm">Current Bid</p>
            <h1 className="font-bold ">4.89 eTH</h1>
          </div>
        </div>
        <div className=" flex justify-between pt-3 text-center">
          <div className="place-bid hover:bg-[#000] group hover:text-white bg-none p-3 px-7 rounded-3xl flex gap-2 border-2 border-[#5142FC]">
            <BidBlue />
            <p className="text-[#5142FC] hover:text-white ">Place Bid</p>
          </div>

          <div className="flex items-center gap-2 group">
            <ReloadIcon />
            <p className="align">View History</p>
          </div>
        </div>
      </div>
    </div>
  );
};
