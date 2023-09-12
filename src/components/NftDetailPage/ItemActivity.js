import React from "react";
import Table from "../Common/Table";
import FilternewIcon from "../Icons/FilternewIcon";

const ItemActivity = () => {
  return (
    <div>
      <div style={{height:"100%"}} className="border-2 border-[#ECECEC] rounded-lg p-6 mt-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">Item Activity</h1>
          <div className="bg-[#F6F5FF] p-2 flex items-center gap-2">
            <FilternewIcon />
            <p className="text-black">Filter</p>
          </div>
        </div>
        <Table/>
      </div>
    </div>
  );
};

export default ItemActivity;
