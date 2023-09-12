import React from 'react';
import Image from 'next/image';
import ApeNFT from '../../../public/ape-img.png';
import { showWalletAddress } from '../../utils/showWalletAddress';
import isEmpty from '../../utils/isEmpty';

const CollectionDetailCard = ({ data }) => {
  if (!isEmpty(data) && data?.hasOwnProperty('metadata')) {
    return (
      <div className="bg-white rounded-[20px] max-w-[330px] h-[472px] shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
        <div className="px-5 pt-5 pb-2 border-b border-[#EBEBEB]">
          <div className="h-80 w-full relative">
            <Image
              src={data?.metadata?.image}
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              alt="NFT Detail"
              className="rounded-lg"
            />
          </div>
          <div className="pt-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="text-[#1F1F2C] text-lg font-bold">
                {data?.metadata?.name}
              </h4>
              <div className="px-2 py-1 bg-[#5142FC] rounded-lg">
                <p className="text-white text-xs font-bold">GOR</p>
              </div>
            </div>
            {/* <p className="text-[#8A8AA0] text-xs">Ends in 3 days</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[2px] px-5 py-4 h-20">
            <span className="text-[#8A8AA0] text-xs">Owned By</span>
            <h5 className="text-[#1F1F2C] text-lg font-bold">
              {showWalletAddress(data?.owner)}{' '}
              {/* <span className="text-[#8A8AA0] text-xs">= $12.246</span> */}
            </h5>
          </div>
          {/* <button className="bg-[#5142FC] text-white px-6 py-7 flex items-center justify-center uppercase rounded-br-[20px] h-20">
          ADD TO CART
        </button> */}
        </div>
      </div>
    );
  } else if (data?.hasOwnProperty('asset'))
    return (
      <div className="bg-white rounded-[20px] max-w-[330px] h-[472px] shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
        <div className="px-5 pt-5 pb-2 border-b border-[#EBEBEB]">
          <div className="h-80 w-full relative">
            <Image
              src={data?.asset?.image}
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              alt="NFT Detail"
              className="rounded-lg"
            />
          </div>
          <div className="pt-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="text-[#1F1F2C] text-lg font-bold">
                {data?.asset?.name}
              </h4>
              <div className="px-2 py-1 bg-[#5142FC] rounded-lg">
                <p className="text-white text-xs font-bold">GOR</p>
              </div>
            </div>
            {/* <p className="text-[#8A8AA0] text-xs">Ends in 3 days</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[2px] px-5 py-4 h-20">
            <span className="text-[#8A8AA0] text-xs">Owned By</span>
            <h5 className="text-[#1F1F2C] text-lg font-bold">
              {showWalletAddress(data?.sellerAddress)}{' '}
              {/* <span className="text-[#8A8AA0] text-xs">= $12.246</span> */}
            </h5>
          </div>
          {/* <button className="bg-[#5142FC] text-white px-6 py-7 flex items-center justify-center uppercase rounded-br-[20px] h-20">
          ADD TO CART
        </button> */}
        </div>
      </div>
    );
};

export default CollectionDetailCard;
