import bg from '../../../public/Background.png';
import Explore from '../Icons/Explore';
import { CreateIcon } from '../Icons/CreateIcon';

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-70px)] bg-hero">
      <div className="bg-[#04002DD9] h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[56px] font-bold leading-[68px]">
            Discover, and collect
          </h1>
          <h1 className="text-white text-[56px] font-bold leading-[68px]">
            <span>extraordinary</span> Monster NFTs
          </h1>
          <p className="text-white text-center text-xl mt-[30px]">
            Marketplace for monster character cllections non fungible token NFTs
          </p>
          <div className="mt-[50px] flex gap-3">
            <button
              type="button"
              className="group flex gap-2 px-8 py-4 bg-transparent hover:bg-white text-white hover:text-[#343444] text-[15px] font-bold border-2 border-white rounded-full"
            >
              <Explore className="fill-white group-hover:fill-[#5142FC]" />
              Explore
            </button>
            <button
              type="button"
              className="group flex gap-2 px-8 py-4 bg-white hover:bg-[#5142FC] text-[#343444] hover:text-white text-[15px] font-bold border-2 border-white hover:border-[#5142FC] rounded-full"
            >
              <CreateIcon className="fill-[#5142FC] group-hover:fill-white" />
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
