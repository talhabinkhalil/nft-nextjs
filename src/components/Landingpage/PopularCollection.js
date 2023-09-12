import React from 'react';
import livecard from '../../../public/livecard.png';
import list from '../../../public/List.png';
import FavrouiteIcon from '../Icons/FavrouiteIcon';
import Slider from "react-slick";

import creator from '../../../public/creator.png';
import Image from 'next/image';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';
const PopularCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="bg-[#F8F8F8] pb-10">
        <div className="container mx-auto relative mb-20">
          <h1 className="font-bold text-center text-4xl pt-11 pb-0">
            Popular Collection
          </h1>
          
          <div className='pt-10 px-20'>
      
      <Slider {...settings}>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
        <div>
        <div className="group/card cursor-pointer p-4 relative gap-2  bg-[#FFFFFF] rounded-3xl  drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
              <Image style={{width:"100%"}} className="rounded-3xl " src={list} alt="list" />
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
                    <h1 className=" text-lg font-bold">
                      Creative Art Collection
                    </h1>
                    <h1 className="text-[#7A798A] text-sm ">
                      Created by
                      <span className="font-bold ml-2">Ralph Garraway</span>
                    </h1>
                  </div>
                </div>
                <div className="  bg-[#5142FC] h-8 px-4 items-center rounded-2xl flex gap-1">
                  <FavrouiteIcon />
                  <p className="text-white">100</p>
                </div>
              </div>
            </div>
        </div>
      </Slider>
    </div>
         
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
