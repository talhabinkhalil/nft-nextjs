import React, { useEffect, useState } from 'react';
import DownIcon from '../Icons/DownIcon';
import FilterIcon from '../Icons/FilterIcon';
import CreatedCollected from './CreatedCollected';
import useGetSelectedTab from '../../hooks/redux-toolkit/useGetSelectedTab';
import ListedProfile from './ListedProfile';
import useProfileFilters from '../../hooks/redux-toolkit/useProfileFilters';
import isEmpty from '../../utils/isEmpty';
import Created from './Created';
import DropDown from '../Common/DropDown';
import {
  auctionLiveCompleted,
  activeInactive,
} from '../../../constants/constants';
import useGetActiveInactiveDropdown from '../../hooks/redux-toolkit/useGetActiveInactiveDropdown';
import { setActiveInactive } from '../../../redux-toolkit/slices/profileSlice';
import { Button } from '@material-tailwind/react';
import useHasOfferDirectAuction from '../../hooks/redux-toolkit/useHasOfferDirectAuction';

const componentToRender = {
  collected: <CreatedCollected />,
  created: <Created />,
  listed: <ListedProfile />,
};

const selected = 'bg-black';
const notSelected = 'bg-white text-black border';

const Content = () => {
  const tab = useGetSelectedTab();
  const { filters, setFilters } = useProfileFilters();
  const { activeInactive: selectedActiveInactive, changeFilter } =
    useGetActiveInactiveDropdown();
  const { hasOfferType, setHasOfferType } = useHasOfferDirectAuction();

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
  const [currencyState, currencySetState] = useState(true);
  const handlecurrency = () => {
    currencySetState(!currencyState);
  };
  const [priceState, priceSetState] = useState(true);
  const handleprice = () => {
    priceSetState(!priceState);
  };

  const handleChange = (key, value) => {
    setFilters(key, value);
  };

  const handleChangeAuctionType = (name) => {
    setHasOfferType(name);
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
                <h1 className="font-bold text-xl">Filters</h1>
                <DownIcon />
              </div>

              {statusState && (
                <div>
                  <div className="flex items-center pt-3 gap-2">
                    <input
                      type="radio"
                      checked={filters === 'buyNow'}
                      name="filter"
                      onChange={(e) => {
                        handleChange('buyNow', e.target.checked);
                        changeFilter('');
                      }}
                    />
                    <h1>Buy Now</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input
                      type="radio"
                      checked={filters === 'onAuction'}
                      name="filter"
                      onChange={(e) => {
                        handleChange('onAuction', e.target.checked);
                        changeFilter('');
                      }}
                    />
                    <h1>On Auctions</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input
                      type="radio"
                      name="filter"
                      checked={filters === 'hasOffers'}
                      onChange={(e) => {
                        handleChange('hasOffers', e.target.checked);
                        changeFilter('');
                      }}
                    />
                    <h1>Has Offers</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input
                      type="radio"
                      checked={filters === 'minted'}
                      name="filter"
                      onChange={(e) => {
                        handleChange('minted', e.target.checked);
                        changeFilter('');
                      }}
                    />
                    <h1>Minted</h1>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <input
                      type="radio"
                      checked={filters === 'directInactive'}
                      name="filter"
                      onChange={(e) => {
                        handleChange('directInactive', e.target.checked);
                        changeFilter('');
                      }}
                    />
                    <h1>Direct InActive</h1>
                  </div>
                </div>
              )}
            </div>
            {!isEmpty(filters) && (
              <div
                onClick={() => handleChange('')}
                className="bg-[#5142FC] px-3 p-1 my-2 w-fit cursor-pointer h-8 text-white rounded-lg"
              >
                Clear Filter
              </div>
            )}
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
          <div>
            <div
              className="flex justify-between items-center pt-6 cursor-pointer"
              onClick={handleprice}
            >
              <h1 className="font-bold text-xl">Price</h1>
              <DownIcon />
            </div>
            {priceState && (
              <div>
                <div className="flex gap-4 flex-wrap justify-between pt-5">
                  <select className="border p-2 rounded-lg">
                    <option>USD</option>
                  </select>
                  <div className="flex gap-2 items-center">
                    <input
                      type=""
                      placeholder="MIN"
                      className="w-[80px] p-2 px-6 border rounded-lg"
                    />
                    to
                    <input
                      type=""
                      placeholder="MAX"
                      className=" p-2 px-5 w-[80px] border rounded-lg"
                    />
                  </div>
                </div>
                <div className="bg-[#5142FC] rounded-full py-4 px-10 text-center mt-6 text-white font-bold cursor-pointer">
                  Accept
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center pt-6 cursor-pointer"
              onClick={handlecurrency}
            >
              <h1 className="font-bold text-xl">Currency</h1>
              <DownIcon />
            </div>
            {currencyState && (
              <div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>ETH</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>WETH</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>APE</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>ASH</h1>
                </div>
                <div className="flex items-center pt-3 gap-2">
                  <input type="checkbox" />
                  <h1>AVAX</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-[calc(100%-226px)] lg:w-[calc(100%-296px)]">
          <div className="flex justify-end">
            <div className="flex gap-4">
              <div className="flex relative border p-2 rounded-lg items-center">
                <input
                  type="search"
                  className="w-full px-10 border-none"
                  placeholder="Type your question here"
                />
                {/* <SearchIcon className="pt-3" /> */}
              </div>
              {hasOfferType === 'auction' && filters === 'hasOffers' ? (
                <DropDown
                  dropdownValues={auctionLiveCompleted}
                  mainCategoryName={''}
                  selectedValue={selectedActiveInactive}
                  setSelectedValue={changeFilter}
                />
              ) : (
                <DropDown
                  dropdownValues={activeInactive}
                  mainCategoryName={''}
                  selectedValue={selectedActiveInactive}
                  setSelectedValue={changeFilter}
                />
              )}
            </div>
          </div>
          {filters === 'hasOffers' && (
            <div className="flex">
              <Button
                className={
                  hasOfferType == 'direct'
                    ? selected + ' mr-5'
                    : notSelected + ' mr-5'
                }
                onClick={() => handleChangeAuctionType('direct')}
              >
                Direct
              </Button>
              <Button
                className={hasOfferType == 'auction' ? selected : notSelected}
                onClick={() => handleChangeAuctionType('auction')}
              >
                Auction
              </Button>
            </div>
          )}
          {componentToRender[tab]}
        </div>
      </div>
    </div>
  );
};

export default Content;
