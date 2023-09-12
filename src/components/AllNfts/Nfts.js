import React, { useState } from 'react';
import DownIcon from '../Icons/DownIcon';
import AllNftsCards from '../Common/AllNftsCards';
import FilterIcon from '../Icons/FilterIcon';

const Nfts = () => {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };

  const [statusState, statusSetState] = useState(true);
  const handleStatus = () => {
    statusSetState(!statusState);
  };

  const [categoriesState, categoriesSetState] = useState(true);
  const handleCategories = () => {
    categoriesSetState(!categoriesState);
  };
  const [chainState, chainSetState] = useState(true);
  const handleChain = () => {
    chainSetState(!chainState);
  };
  const [collectionState, collectionSetState] = useState(true);
  const handleCollection = () => {
    collectionSetState(!collectionState);
  };
  return (
    <div>
      <div className="flex pt-10 pb-10 px-10 gap-5">
        <div className=" md:w-[226px] lg:w-[296px]">
          <div>
            <div className="flex justify-between  items-center gap-32 cursor-pointer">
              <h1 className="font-bold text-2xl">Filter</h1>
              <FilterIcon />
            </div>

            <div>
              <div
                className="flex justify-between items-center pt-6"
                onClick={handleStatus}
              >
                <h1 className="font-bold text-xl">Status</h1>
                <DownIcon />
              </div>

              {statusState && (
                <div>
                  <div className="flex items-center pt-3 gap-2">
                    <input type="checkbox" />
                    <h1>Buy Now</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input type="checkbox" />
                    <h1>On Auctions</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input type="checkbox" />
                    <h1>Has Offers</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="flex justify-between items-center pt-6 cursor-pointer"
              onClick={handleCategories}
            >
              <h1 className="font-bold text-xl">Categories</h1>
              <DownIcon />
            </div>
            {categoriesState && (
              <div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Art</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Music</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Domain Names</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Virtual Worlds</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Trading Cards</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Collectibles</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Sports</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Utility</h1>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center pt-6 cursor-pointer"
              onClick={handleChain}
            >
              <h1 className="font-bold text-xl">Chains</h1>
              <DownIcon />
            </div>
            {chainState && (
              <div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Ethereum</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Polygon</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Klaytn</h1>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center pt-6 cursor-pointer"
              onClick={handleCollection}
            >
              <h1 className="font-bold text-xl">Collections</h1>
              <DownIcon />
            </div>
            {collectionState && (
              <div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Abstraction</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Patternlicious</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Skecthify</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Cartoonism</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Virtuland</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>Papercut</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-[calc(100%-226px)] lg:w-[calc(100%-296px)]">
          <div className="flex justify-end ">
            <div>
              <div className="dropdown relative">
                <a
                  className="
          dropdown-toggle
          px-16
          
          py-4
          text-black
          leading-tight
          rounded
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          bg-[#F8F8F8]
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  href="#"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleState}
                >
                  Sort By
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </a>
                {state && (
                  <ul
                    className="
          dropdown-menu
          w-48
          absolute
          bg-white
          text-base
          z-50
          float-left

          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-10
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Art
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Music
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Domain Names
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Virtual World
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Trading Cards
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Sports
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-4
              px-7
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-[#7A798A]
              hover:bg-[#5142FC]
              hover:text-white
            "
                        href="#"
                      >
                        Utility
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-10 pb-10">
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
            <AllNftsCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nfts;
