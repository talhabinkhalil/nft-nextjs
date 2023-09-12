import React from 'react';
import Upload from '../../../public/Upload.png';
import useGetAllCategories from '../../hooks/redux-toolkit/useGetAllCategories';
import EthereumIcon from '../Icons/EthereumIcon';
const UploadImage = () => {
  const categories = useGetAllCategories();

  return (
    <div>
      <div className="container mx-auto pt-10 max-w-[1240px]">
        <h1 className="font-bold text-4xl pt-3 pb-3">Create a Collection</h1>
        <p className="text-[#7A798A] text-sm pt-3 pb-3">Required fields*</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 pb-10">
          <div className="flex gap-4 items-center">
            <div
              className="w-[176px] h-[176px] rounded-full border-dotted border-2 text-center"
              style={{
                backgroundImage: `url(${Upload.src})`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionX: `center`,
                backgroundPositionY: `center`,
              }}
            >
              <input
                className="rounded-full w-[176px] h-[176px] opacity-0 cursor-pointer"
                type="file"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg pt-3 pb-3">Logo Image*</h1>
              <p>
                This image will also be used for navigation. 350 x 350
                recommended.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="w-[176px] rounded-lg  h-[176px]  border-dotted border-2 text-center"
              style={{
                backgroundImage: `url(${Upload.src})`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionX: `center`,
                backgroundPositionY: `center`,
              }}
            >
              <input
                className=" w-[176px] h-[176px] opacity-0 cursor-pointer"
                type="file"
              />
            </div>
            <div>
              <h1 className=" rounded-lg font-bold text-lg pt-3 pb-3">
                Banner Image*
              </h1>
              <p>
                This image will also be used for navigation. 350 x 350
                recommended.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="font-bold text-2xl pb-6"> Upload Banner Image</h1>
          <div className="border rounded-lg w-full p-7 relative">
            <div className="flex justify-between items-center relative">
              <p>PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
              <div className="rounded-full p-2">
                <input
                  className="absolute cursor-pointer right-0 opacity-0"
                  name="n"
                  type="file"
                  title="Upload File"
                />
                <span className="bg-[#dedbfa] p-4 text-[#5142FC] font-bold rounded-full px-8">
                  Upload File
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-4">
          <div>
            <h1 className="font-bold text-2xl pb-6">Title</h1>
            <input
              className="w-full p-4 border rounded-lg"
              type="input"
              placeholder="Item Name"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl pb-6">URL</h1>
            <input
              className="w-full p-4 border rounded-lg"
              type="input"
              placeholder="https://example.io"
            />
          </div>
        </div>
        <div className="w-full pt-10 ">
          <h1 className="font-bold text-2xl pb-6 ">Description</h1>
          <textarea placeholder='For Example' className="w-full border p-4 h-[100px] rounded-lg"/>
     
        </div>
        <div className="flex justify-between relative pt-10 items-center">
          <div className="">
            <h1 className="font-bold text-2xl pb-6 ">Category</h1>
            <p>
              This image will also be used for navigation. 350 x 350
              recommended.
            </p>
          </div>
          <div className="rounded-full p-2 relative item-center">
            <input
              className="absolute cursor-pointer right-0 opacity-0"
              name="n"
              type="file"
              title="Upload File"
            />
            <span className="bg-[#dedbfa] p-4 text-[#5142FC] font-bold rounded-full px-8">
              Categories
            </span>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="font-bold text-2xl pb-6">Upload Banner Image</h1>
          <p className="text-[#7A798A]">
            The category selection above will be going away soon. The category
            you choose below will appear on your collection and item pages.
            Categories and tags will also appear in other places throughout
            OpenSea soon. Select or confirm the category and tags for your
            collection. Learn more
          </p>
          <div className="border rounded-lg p-4 mt-10">
            <h1 className="font-bold pb-4">Select a Categories</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                className="w-full p-4 border rounded-lg"
                type="input"
                placeholder="Select Categories"
              />
              <input
                className="w-full p-4 border rounded-lg"
                type="input"
                placeholder="Add u to 5 tags"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
          <div>
            <h1 className="font-bold text-2xl pb-6">Creator earnings</h1>
            <p className="pb-2">
              Earn a percentage of the sale price every time one of your items
              is sold. Adding multiple addresses may increase gas fees for
              buyers.
            </p>
            <div className="bg-[#dedbfa]  p-4 text-[#5142FC] font-bold rounded-full px-8 w-fit cursor-pointer">
              Add Address
            </div>
          </div>
          <div className="pt-5 md:pt-0">
            <h1 className="font-bold text-2xl pb-6">Blockchain</h1>
            <select className="border rounded-lg p-3 w-full">
              <option>scnjdnc</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
          <div>
            <h1 className="font-bold text-2xl pb-6">Payment tokens</h1>
            <p className="pb-2">
              These tokens can be used to buy and sell your items.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl pb-6">Blockchain</h1>
            <select className="border rounded-lg p-3 w-full">
              <option>scnjdnc</option>
            </select>
            <div className="flex gap-4 pt-4">
              <div className="border-2 bg-[#F6F5FF] border-[#6E37FF] flex gap-2 p-3 rounded-lg w-fit items-center">
                <EthereumIcon />
                <div>
                  <h2>ETH</h2>
                  <p>Ethereum</p>
                </div>
              </div>
              <div className="border-2 bg-[#F6F5FF] border-[#6E37FF] flex gap-2 p-3 rounded-lg w-fit items-center">
                <EthereumIcon />
                <div>
                  <h2>ETH</h2>
                  <p>Ethereum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-10">
          <div>
            <h1 className="font-bold text-2xl pb-4">
              Explicit & Sensitive Content
            </h1>
            <p>Set this item as explicit and sensitive content.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[26px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
        <div className="flex justify-between pt-10">
          <div>
            <h1 className="font-bold text-2xl pb-4">
            Unlockable Content
            </h1>
            <p>include unlockable content that can only be revealed by the owner of the item.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className=" h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[26px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
        <div className="p-3 px-20 font-bold mt-10 cursor-pointer mb-10 bg-[#5142FC]  rounded-full text-[white] w-fit">
          Create
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
