import React from 'react';

const LoadMore = ({ onClickLoadMore }) => {
  return (
    <div className="flex justify-center">
      <div
        onClick={onClickLoadMore}
        className="p-3 px-9 bg-[#F8F8F8] cursor-pointer my-6 font-bold text-[#5142FC] rounded-full text-center items-center "
      >
        Load More
      </div>
    </div>
  );
};

export default LoadMore;
