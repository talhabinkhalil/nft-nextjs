import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Explore from '../../Icons/Explore';
import DownIcon from '../../Icons/DownIcon';
import Link from 'next/link';

const NavLinks = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full">
      <ul className="flex items-center justify-center gap-10 text-lg">
        <li>
          <Link href="/" className="text-black" aria-current="page">
            <span className="font-bold"> Home</span>
          </Link>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-black font-bold flex items-center gap-1">
                Options
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Explore
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Settings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Earnings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Sign out
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li>
          <Link
            href="/collection-detail"
            className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <span className="font-bold"> Profile</span>
          </Link>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-black font-bold flex items-center gap-1">
                Community
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Dashboard
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Settings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Earnings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Sign out
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-black font-bold flex items-center gap-1">
                Pages
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/create-item">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Create Item
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Settings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Earnings
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/explore">
                        <button
                          className={`${
                            active ? 'bg-[#6E37FF] text-white' : 'text-black'
                          } group flex w-full items-center px-2 py-2`}
                        >
                          Sign out
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li>
          <Link
            href="/UserProfile"
            className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
          >
            <span className="font-bold">My Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
