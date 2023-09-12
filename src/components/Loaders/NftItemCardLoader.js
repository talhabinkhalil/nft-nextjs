import React from 'react';
import Skeleton from 'react-loading-skeleton';

const NftItemCardLoader = () => {
  return (
    <div className="bg-white rounded-[20px] max-w-[330px] h-[472px] shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
      <div className="px-5 pt-5 pb-2 border-b border-[#EBEBEB]">
        <Skeleton height={285} style={{ borderRadius: 20 }} />
        <div className="pt-5 flex flex-col gap-2">
          <Skeleton width={'80%'} />
          <Skeleton width={'30%'} />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-[2px] px-5 py-4 h-20">
          <Skeleton width={'20%'} />
          <Skeleton width={'60%'} />
        </div>
      </div>
    </div>
  );
};

export default NftItemCardLoader;
