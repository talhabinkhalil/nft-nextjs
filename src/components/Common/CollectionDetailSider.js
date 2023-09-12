import React from 'react';
import Slider from 'react-slick';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';
import CollectionCard from './CollectionCard';

const CollectionDetailSider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextIcon />,
    prevArrow: <PreviousIcon />,
  };

  return (
    <div className="container mx-auto max-w-[1140px] py-8">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 pt-16 pb-16"> */}
      <Slider {...settings}>
    
      </Slider>
     
   
    </div>
  );
};

export default CollectionDetailSider;
