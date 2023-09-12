import React, { useState } from "react";
import DownIcon from "../Icons/DownIcon";
const Details = () => {
  const [pricesetstate, pricesetuseState] = useState(true);
  const handleprice = () => {
    pricesetuseState(!pricesetstate);
  };
  return (
    <div>
      <div style={{height:"100%"}} className="border-2 border-[#ECECEC] rounded-lg p-6 mt-10">
        <div
          className="flex px-4 justify-between items-center cursor-pointer"
          onClick={handleprice}
        >
          <h1 className="font-bold text-lg">Details</h1>
          <DownIcon />
        </div>
        {pricesetstate && (
          <div className="p-4">
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Contract Address</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Token ID</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Token Standard</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Chain</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Metadata</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <h1 className="font-bold">Creator Fee</h1>
              <p className="text-[#868686] text-sm">7659423439369363...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
