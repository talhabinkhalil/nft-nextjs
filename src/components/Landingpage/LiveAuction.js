import LiveAuctionCard from '../Common/LiveAuctionCard';
import Slider from "react-slick";
const LiveAuction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="container max-w-[1368px] mx-auto pt-[140px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#1F1F2C] text-4xl text-center font-bold">
          Live Auctions
        </h1>
        <hr className="h-[3px] w-[80px] bg-[#5142FC] " />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10"> */}
      <div className='pt-10'>
      
        <Slider {...settings}>
          <div>
          <LiveAuctionCard />
          </div>
          <div>
          <LiveAuctionCard />
          </div>
          <div>
          <LiveAuctionCard />
          </div>
          <div>
          <LiveAuctionCard />
          </div>
          <div>
          <LiveAuctionCard />
          </div>
          <div>
          <LiveAuctionCard />
          </div>
        </Slider>
      </div>
      </div>
    // </div>
  );
};

export default LiveAuction;
