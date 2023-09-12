import React from 'react';
import Image from 'next/image';
import CollectionImage from '../../../public/CollectionImage.png';
import CopyIcon from '../Icons/CopyIcon';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import useGetShortAddress from '../../hooks/thirdWeb-hooks/useGetShortAddress';
import { userProfileHeader } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import {
  clearCollectedData,
  setCurrentSelectedTab,
} from '../../../redux-toolkit/slices/profileSlice';
import useGetSelectedTab from '../../hooks/redux-toolkit/useGetSelectedTab';

const ProfileHeader = ({ withTabs, forCollection }) => {
  const address = useGetShortAddress();
  const dispatch = useDispatch();
  const tab = useGetSelectedTab();

  const handleSelectTab = (id) => {
    dispatch(clearCollectedData());
    dispatch(setCurrentSelectedTab(id));
  };
  return (
    <div className="container mx-auto max-w-[1410px] pt-20">
      <div className="pt-10 pb-5 pl-[30px] collection-header bg-[#F8F8F8] flex items-center gap-8 rounded-xl">
        <Image src={CollectionImage} alt="Collection Image" />
        <div className="flex flex-col">
          <div className="mt-16">
            <h3 className="text-white text-[36px] font-bold capitalize">
              Trista Francis
            </h3>
            <p className="text-white text-2xl">
              Created <span className="font-bold">Thu Dec 15 2023</span>
            </p>
          </div>
          {withTabs && (
            <>
              <button className="mt-6 px-5 py-2 bg-[#EBEBEB] rounded-full text-[#6E37FF] text-xs font-medium flex items-center gap-2 max-w-fit">
                {address}
                <CopyIcon />
              </button>
              <div className="flex pt-14">
                <ul className="flex items-center gap-8">
                  {userProfileHeader.map((header) => (
                    <li
                      key={header.id}
                      className={`text-xl text-[#1F1F2C] cursor-pointer 
                      active:text-[#5142FC] font-bold ${
                        tab === header.id ? 'text-purple-700	' : ''
                      }`}
                      onClick={(e) => handleSelectTab(header.id)}
                    >
                      {header?.name}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      {forCollection && (
        <div className="flex items-start gap-8 pt-14 max-w-[1260px] mx-auto">
          <div className="flex flex-col gap-3 w-1/2">
            <h4 className="text-[#1F1F2C] text-2xl font-bold">About us</h4>
            <p className="text-[#979797] text-sm font-medium leading-6">
              The 911. An icon turned virtual. A timeless icon. A car that broke
              boundaries and defied convention. A car born out of a relentless
              pursuit of a dream. Now, the 911 is embarking on a new journey,
              steered by your passions. Owning one of 7,500 Porsche 911 NFTs
              gives you access to a new world of Porsche where the rewards are
              real and special to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 w-1/2 p-[22px] bg-[#F6F5FF] border border-[#6E37FF] rounded-lg">
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">0.93 ETH</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Total volume
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">0.93 ETH</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Floor price
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">0.87 WETH</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Best offer
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">7%</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Listed
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">958</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Owners
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">71%</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Unique owners
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">1,347</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Items
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">Jan 2023</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Created
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">0%</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Creator Earnings
              </p>
            </div>
            <div className="w-[90px] flex flex-col items-center gap-2">
              <h5 className="text-[#6E37FF] text-base font-bold">Ethereum</h5>
              <p className="text-[#979797] text-sm font-medium whitespace-nowrap">
                Chain
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
