import React, { useState } from "react";
import DownIcon from "../Icons/DownIcon";
import Graph from "../Icons/Graph";
const PriceHistory = () => {
  const [pricesetstate, pricesetuseState] = useState(true);
  const handleprice = () => {
    pricesetuseState(!pricesetstate);
  };
  return (
    <div>
      <div style={{height:"100%"}} className="border-2 border-[#ECECEC] rounded-lg p-3 p-6 mt-2">
        <div
          className="flex px-4 justify-between items-center cursor-pointer"
          onClick={handleprice}
        >
          <h1 className="font-bold text-lg">Properties</h1>
          <DownIcon />
        </div>
        {pricesetstate && (
            <div className="p-4"><Graph className="w-100" /></div>
        )}
      </div>
    </div>
  );
};

export default PriceHistory;
