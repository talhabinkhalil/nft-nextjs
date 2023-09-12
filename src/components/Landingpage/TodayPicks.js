import React from "react";
import LoadMore from "../Common/LoadMore";

import { NftCard } from "../Common/NftCard";
export const TodayPicks = () => {
  return (
    <div>
      <div className="container mx-auto pt-20 pb-20 px-20">
        <h1 className="text-center text-4xl font-bold pt-10">Today's Picks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 pt-16">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 pt-16">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
       <LoadMore/>
      </div>
    </div>
  );
};
