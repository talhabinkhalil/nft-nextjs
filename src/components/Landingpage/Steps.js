import SetWallet from '../Icons/SetWallet';
import { CollectionIcon } from '../Icons/CollectionIcon';
import { AddNfts } from '../Icons/AddNfts';
import ListSale from '../Icons/ListSale';

const Steps = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container max-w-[1244px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-[60px]">
          <div className="w-[288px] flex flex-col items-center justify-between gap-6">
            <SetWallet />
            <h1 className="text-[#1F1F2C] text-2xl font-bold capitalize">
              Set up your wallet
            </h1>
            <p className="text-[#7A798A] text-sm text-center -mt-4">
              Once youve set up your wallet of choice, connect it to OpenSeaby
              clicking the NFT Marketplacein the top right corner.
            </p>
          </div>
          <div className="w-[288px] flex flex-col items-center justify-between gap-6">
            <CollectionIcon />
            <h1 className="text-[#1F1F2C] text-2xl font-bold capitalize">
              Create your collection
            </h1>
            <p className="text-[#7A798A] text-sm text-center -mt-4">
              Click Create and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
          </div>
          <div className="w-[288px] flex flex-col items-center justify-between gap-6">
            <AddNfts />
            <h1 className="text-[#1F1F2C] text-2xl font-bold capitalize">
              Add your NFTs
            </h1>
            <p className="text-[#7A798A] text-sm text-center -mt-4">
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs with properties, stats
            </p>
          </div>
          <div className="w-[288px] flex flex-col items-center justify-between gap-6">
            <ListSale className="text-center" />
            <h1 className="text-[#1F1F2C] text-2xl font-bold capitalize">
              List them for sale
            </h1>
            <p className="text-[#7A798A] text-sm text-center -mt-4">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
