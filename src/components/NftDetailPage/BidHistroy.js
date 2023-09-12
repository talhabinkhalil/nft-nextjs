import Image from 'next/image';
import React from 'react';
import creator from '../../../public/creator.png';
const BidHistroy = () => {
  return (
    <div>
      <div style={{height:"100%"}} className="border-2 border-[#ECECEC] rounded-lg p-6 mt-2">
        <ul className="inline-flex gap-10 font-bold text-lg ">
          <li className="font-bold text-lg border-b-2 gap-4 border-blue-700">
            Bid history
          </li>
          <li className="font-bold text-lg border-b-2 border-blue-700">
            Listing
          </li>
          <li className="font-bold text-lg border-b-2 border-blue-700">
            Offer
          </li>
        </ul>
        <div className="h-[231px]  overflow-auto">
          <div className="p-3 border-2 border-b-0 mt-2">
            <div className=" flex  justify-between">
              <div className="flex gap-3">
                <Image className="rounded-lg" src={creator} alt="creator" />
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-bold ">Mason Woodward</h1>
                    <span className="text-sm text-[#7A798A]">place a bid</span>
                  </div>
                  <p className="text-sm text-[#7A798A]">8 hour's ago</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold">4.89 ETH</h1>
                <p className="text-#7A798A]">= $12.246</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-b-0">
            <div className=" flex  justify-between">
              <div className="flex gap-3">
                <Image className="rounded-lg" src={creator} alt="creator" />
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-bold ">Mason Woodward</h1>
                    <span className="text-sm text-[#7A798A]">place a bid</span>
                  </div>
                  <p className="text-sm text-[#7A798A]">8 hour's ago</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold">4.89 ETH</h1>
                <p className="text-#7A798A]">= $12.246</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-b-0 border-[]">
            <div className=" flex  justify-between">
              <div className="flex gap-3">
                <Image className="rounded-lg" src={creator} alt="creators" />
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-bold ">Mason Woodward</h1>
                    <span className="text-sm text-[#7A798A]">place a bid</span>
                  </div>
                  <p className="text-sm text-[#7A798A]">8 hour's ago</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold">4.89 ETH</h1>
                <p className="text-#7A798A]">= $12.246</p>
              </div>
            </div>
          </div>

          <div className="p-3 border-2 border-[]">
            <div className=" flex  justify-between">
              <div className="flex gap-3">
                <Image className="rounded-lg" src={creator} alt="creator" />
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-bold ">Mason Woodward</h1>
                    <span className="text-sm text-[#7A798A]">place a bid</span>
                  </div>
                  <p className="text-sm text-[#7A798A]">8 hour's ago</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold">4.89 ETH</h1>
                <p className="text-#7A798A]">= $12.246</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidHistroy;
