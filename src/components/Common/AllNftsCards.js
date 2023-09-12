import React from 'react';
import livecard from '../../../public/livecard.png';
import Image from 'next/image';
import FavrouiteIcon from '../Icons/FavrouiteIcon';
import creator from '../../../public/creator.png';
const AllNftsCards = () => {
  return (
    <div>
      <div className="group/card cursor-pointer px-5  pt-5 relative bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)] group/addcart">
        <Image
          alt="livecard"
          className="rounded-3xl w-100"
          src={livecard}
          style={{width:"100%"}}
        />
<div className=" absolute top-10 left-12 bg-[#FFBD0C]  p-1 px-4 rounded-2xl flex gap-1">
          <p className="color-[#343444]">Coming soon</p>
        </div>
        <div className=" absolute top-10 right-12 bg-black p-1 px-4 rounded-2xl flex gap-1">
          <FavrouiteIcon />
          <p className="text-white">100</p>
        </div>
        <div className="flex justify-between pt-3">
          <h2 className="font-bold text-lg">"Space babe - Night 2/25"</h2>
        </div>
        <div className="pt-3 flex justify-between  divide-y">
          <div className="inline-flex gap-2">
            <Image
              src={creator}
              alt="creator"
              className="rounded-2xl"
              width="55"
              height="20"
            />
            <div>
              <p className="text-[#7A798A] text-sm">Creator</p>
              <h1 className="font-bold ">SalvadorDali</h1>
            </div>
          </div>
          <div className="bg-[#5142FC] px-3 p-1   h-8 text-white rounded-lg">
            BSC
          </div>
        </div>
        <hr class="mb-1 mr-9 mt-8 bg-[#EBEBEB] "></hr>
        <div className=" divide-y pt-5 pb-3 px-0 flex justify-between">
          <div className="">
            <p className="text-[#7A798A] text-sm">Current Bid</p>
            <h1 className="font-bold ">
              4.89 eTH{' '}
              <span className=" text-sm text-[#7A798A]">= $12.123</span>{' '}
            </h1>
          </div>
          <div className="bg-[#5142FC] text-white items-center absolute right-0 bottom-0 p-4 px-10 rounded-br-lg invisible group-hover/addcart:visible transition duration-150 ease-out">
            Add Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNftsCards;
