import React from 'react';
import Image from 'next/image';
import BidBlue from '../Icons/BidBlue';
import ReloadIcon from '../Icons/ReloadIcon';
import VerifiedIcon from '../Icons/VerifiedIcon';
import { useRouter } from 'next/router';

const CollectionCard = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`group cursor-pointer bg-[#FFFFFF] rounded-[20px] w-[358px] h-[322px] p-5 ${
          router.pathname === '/UserProfile'
            ? 'border border-[#ECECEC]'
            : 'drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]'
        }`}
      >
        <Image
          alt="livecard"
          className="rounded-[20px] w-full h-[200px] object-cover"
          src={`${
            data?.bannerImage?.url
              ? data?.bannerImage?.url
              : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
          }`}
          width={318}
          height={200}
        />
        <div className="pt-6 flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              alt="creator"
              src={data?.logoImage?.url}
              className="rounded-2xl h-[58px]"
              width="58"
              height="58"
            />
            <div className="flex items-center gap-2">
              <h1 className="text-[#1F1F2C] text-[15px] leading-[22px] font-bold capitalize">
                {data?.name}
              </h1>
              <VerifiedIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
