import Image from 'next/image';
import detailimg from '../../../public/nftdetailimg.png';
import FavrouiteIcon from '../Icons/FavrouiteIcon';
import ViewIcon from '../Icons/ViewIcon';
import BlackLikeIcon from '../Icons/BlackLikeIcon';
import SentRegular from '../Icons/SentRegular';
import OptionIcon from '../Icons/OptionIcon';
import creator from '../../../public/creator.png';
import Bidwhite from '../Icons/Bidwhite';
import BidBlue from '../Icons/BidBlue';
import DownIcon from '../Icons/DownIcon';
import { useState } from 'react';
const HeroDetail = () => {
  const [setstate, setuseState] = useState(true);
  const handleproperties = () => {
    setuseState(!setstate);
  };
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 gap-5">
          <div style={{width:"100%",height:"100%"}}>
            <Image src={detailimg}  style={{width:"100%",height:"100%"}} alt="detailing" />
          </div>
          <div>
            <h1 className="font-bold text-4xl">
              “The Fantasy Flower illustration ”
            </h1>
            <div className="flex justify-between pt-2 pb-2 lg:pt-2 lg:pb-2">
              <div className="flex gap-2">
                <div className="bg-[#F8F8F8] rounded-full p-3 flex items-center font-bold gap-2">
                  <ViewIcon />
                  <div>225</div>
                </div>
                <div className="bg-[#F8F8F8] rounded-full p-3 flex items-center font-bold gap-2">
                  <BlackLikeIcon />
                  <div>225</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="p-3 bg-[#F8F8F8] rounded-full items-center">
                  <SentRegular />
                </div>
                <div className="p-3 pt-4 pb-4 bg-[#F8F8F8] rounded-full items-center">
                  <OptionIcon />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8F8F8] p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-5 rounded-lg flex items-center gap-3">
                <div>
                  <Image className="rounded-lg" src={creator} alt="creator" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8AA0]">Owned By</p>
                  <h1 className="font-bold">Ralph Garraway</h1>
                </div>
              </div>
              <div className="bg-[#F8F8F8]  p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-5 rounded-lg flex items-center gap-3">
                <div>
                  <Image className="rounded-lg" src={creator} alt="creator" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8AA0]">Create By</p>
                  <h1 className="font-bold">Ralph Garraway</h1>
                </div>
              </div>
            </div>
            <p className="pt-3 md:pt-3 lg:pt-3 xl:pt-5 2xl:pt-10 text-[#7A798A]">
              Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
              ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
              ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus
              lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi
              fringilla urna amet sed ipsum
            </p>
            <div className="grid grid-cols-2 gap-3 pt-3 2xl:pt-10">
              <div className="bg-[#F8F8F8] p-2  xl:p-5 2xl:p-7 rounded-lg flex justify-between items-center gap-3">
                <div>
                  <p>Current Bid</p>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold">4.89 eTH</h1>
                  <p className="text-sm text-[#8A8AA0]">= $12.246</p>
                </div>
              </div>
              <div className="bg-[#F8F8F8]  p-2  xl:p-5 2xl:p-7 rounded-lg  items-center gap-3">
                <div>
                  <p className="text-[#6E37FF] text-center text-sm">
                    Sale ends January 7, 2023 at 10:05 PM GMT+5
                  </p>
                </div>
                <div className=" flex justify-between gap-2">
                  <h1 className="font-bold ">Countdown</h1>
                  <p className="font-bold">04 : 23 : 10 : 39</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-3  xl:p-6 2xl:pt-10 gap-3">
              <div className="bg-[#5142FC] font-bold text-white flex gap-2 text-center rounded-full p-4 justify-center">
                <Bidwhite />
                Buy now
              </div>
              <div className="bg-[#f2effb] font-bold text-[#5142FC] flex gap-2 text-center rounded-full p-4 justify-center">
                <BidBlue />
                Make Offer
              </div>
            </div>

            <div className="border-2 border-[#ECECEC] rounded-lg p-3 2xl:p-6 mt-3 2xl:mt-10 h-[200px] lg-h-[165px] xl:h-[200px] 2xl:h-[320px] overflow-auto">
              <div
                className="flex px-4 justify-between items-center cursor-pointer"
                onClick={handleproperties}
              >
                <h1 className="font-bold text-lg">Properties</h1>
                <DownIcon />
              </div>
              {setstate && (
                <div className="flex flex-wrap gap-4 mt-3  xl:mt-6">
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                  <div className="p-4 pr-6 bg-[#F6F5FF] rounded-lg">
                    <h1 className="font-bold text-[#5142FC]">Background</h1>
                    <p>White Blue</p>
                    <p className="text-[#909091]">8% have this trait</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
