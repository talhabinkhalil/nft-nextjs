import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CollectionCardLoader = () => {
  return (
    <div className="group cursor-pointer bg-[#FFFFFF] rounded-[20px] w-[358px] h-[322px] p-5 drop-shadow-[0_3px_16px__rgba(47,83,109,0.12)]">
      <Skeleton style={{ lineHeight: 13 }} borderRadius={25} />
      <div className="pt-6 flex justify-between"></div>
      <Skeleton
        style={{ lineHeight: 2 }}
        borderRadius={10}
        width={'50%'}
        enableAnimation={true}
        duration={1}
      />
    </div>
  );
};

export default CollectionCardLoader;
