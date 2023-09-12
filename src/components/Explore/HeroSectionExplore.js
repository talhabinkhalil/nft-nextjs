import React, { useEffect, Fragment } from 'react';
import explorebg from '../../../public/explorebg.png';
import { useState } from 'react';
import LoadMore from '../Common/LoadMore';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { Menu, Transition } from '@headlessui/react';
import DownIcon from '../Icons/DownIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getCollectionsByCategory,
} from '../../../redux-toolkit/actions/explore';
import CollectionCard from '../Common/CollectionCard';
import useGetCategories from '../../hooks/redux-toolkit/useGetCategories';
import isEmpty from '../../utils/isEmpty';
import useGetCollectionsByCategory from '../../hooks/redux-toolkit/useGetCollectionsByCategory';
import useLoading from '../../hooks/redux-toolkit/useLoading';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import {
  nextCollectionPage,
  resetCollectionPage,
  setCurrentCateoryId,
} from '../../../redux-toolkit/slices/exploreSlice';
import { toast } from 'react-hot-toast';
import useSecondaryLoading from '../../hooks/redux-toolkit/useSecondaryLoading';
import NftItemCardLoader from '../Loaders/NftItemCardLoader';
import CollectionCardLoader from '../Loaders/CollectionCardLoader';
import DropDown from '../Common/DropDown';
import { dropdownTabs } from '../../../constants/constants';
import axios from 'axios';

const HeroSectionExplore = () => {
  const dispatch = useDispatch();
  const { categoriesIdName, categories } = useGetCategories();
  const collections = useGetCollectionsByCategory();
  const { loading } = useLoading();
  const [buyNow, setBuyNow] = useState('');
  const { currentCategoryId, totalCollections, collectionPageNo } = useSelector(
    (state) => state?.exploreSlice
  );
  const [state, setState] = useState(false);
  const { secondaryLoading } = useSecondaryLoading();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleCategoryChange = (e) => {
    dispatch(getCollectionsByCategory(e?.value));
    dispatch(setCurrentCateoryId(e?.value));
    dispatch(resetCollectionPage());
  };
  const style = {
    control: (provided) => ({
      ...provided,
      outline: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
    }),
  };
  const handleLoadMoreCollections = () => {
    if (collectionPageNo * 10 > totalCollections) {
      toast.error('You are on the last page');
    } else {
      dispatch(
        getCollectionsByCategory(currentCategoryId, collectionPageNo + 1, true)
      );
      dispatch(nextCollectionPage());
    }
  };

  useEffect(() => {
    axios
      .get('/api/category/all')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const active = true;

  return (
    <div>
      <div
        className="h-1/2 pt-40 pb-40"
        style={{
          backgroundImage: `url(${explorebg.src})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          width: '100%',
        }}
      >
        <h1 className="text-white text-center font-bold text-5xl">
          Explore Collection
        </h1>
      </div>
      <div className="container mx-auto max-w-[1140px]">
        <div className="mt-10 flex justify-between flex-wrap">
          <div className="flex gap-5 flex-wrap">
            <div>
              <Menu
                as="div"
                className="dropdown relative  text-left px-12 py-3 border-2 border-[#EEEEEE] z-10"
              >
                <div>
                  <Menu.Button className="text-black font-normal flex items-center gap-5">
                    All Categories
                    <DownIcon />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Art
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Music
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Domain Names
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Domain Names
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Trading Cards
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Sports
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Utility
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className="flex ">
              <DropDown
                dropdownValues={dropdownTabs}
                mainCategoryName={'Buy Now'}
                selectedValue={buyNow}
                setSelectedValue={setBuyNow}
              />
            </div>
            <div className="flex ">
              <div>
                <Menu
                  as="div"
                  className="dropdown relative  text-left px-12 py-3 border-2 border-[#EEEEEE] z-10"
                >
                  <div>
                    <Menu.Button className="text-black font-normal flex items-center gap-5">
                      All Items
                      <DownIcon />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          <button
                            className={`${
                              active ? 'bg-[#6E37FF] text-white' : 'text-black'
                            } group flex w-full items-center px-4 py-2`}
                          >
                            Art
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Music
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Domain Names
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Domain Names
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Trading Cards
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Sports
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Utility
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex ">
              <div>
                <div className="dropdown relative">
                  {!isEmpty(categoriesIdName) && (
                    <Select
                      styles={style}
                      // styles={{ width: '100' }}
                      placeholder="Select Category"
                      defaultValue={
                        !isEmpty(categoriesIdName) && categoriesIdName[0]
                      }
                      onChange={handleCategoryChange}
                      options={categoriesIdName}
                      // className="dropdown-toggle px-16 py-4 text-black leading-tight rounded active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out bg-[#F8F8F8] flex items-center whitespace-nowrap"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex ">
              <div>
                <Menu
                  as="div"
                  className="dropdown relative  text-left px-12 py-3 border-2 border-[#EEEEEE] z-10"
                >
                  <div>
                    <Menu.Button className="text-black font-normal flex items-center gap-5">
                      Sort by
                      <DownIcon />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Art
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Music
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Domain Names
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Domain Names
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Trading Cards
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Sports
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-[#6E37FF] text-white'
                                  : 'text-black'
                              } group flex w-full items-center px-4 py-2`}
                            >
                              Utility
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 pt-16 pb-16">
          {loading ? (
            <AllCollectionCardsLoader
              LoaderComponent={<CollectionCardLoader />}
            />
          ) : isEmpty(collections) ? (
            <div>
              <h5 className="text-center">No Record Found</h5>
            </div>
          ) : (
            collections?.map((collection) => (
              <CollectionCard data={collection} key={collection?.id} />
            ))
          )}
          {secondaryLoading ? (
            <AllCollectionCardsLoader
              LoaderComponent={<CollectionCardLoader />}
            />
          ) : (
            ''
          )}
        </div>
        <LoadMore onClickLoadMore={handleLoadMoreCollections} />
      </div>
    </div>
  );
};

export default HeroSectionExplore;
