import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import logo from '../../../public/Logo.png';
import { useEffect, useRef, useState } from 'react';
import WalletIcon from '../Icons/WalletIcon';
import useConnectWalletModalStates from '../../hooks/redux-toolkit/useConnectWalletModalStates';
import { ConnectWallet, useAddress, useContract } from '@thirdweb-dev/react';
import ConnectWalletModal from '../Modals/WalletModals/ConnectWalletModal';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import { toast, Toaster } from 'react-hot-toast';
import useIsDisconnected from '../../hooks/thirdWeb-hooks/useIsDisconnected';
import useGetSdk from '../../hooks/redux-toolkit/useGetSdk';
import useSwitchNetwork from '../../hooks/thirdWeb-hooks/useSwitchNetwork';
import useGetSignModalStates from '../../hooks/redux-toolkit/useGetSignModalStates';
import SignToMetamask from '../Modals/WalletModals/SignToMetamask';
import useGetAuthData from '../../hooks/thirdWeb-hooks/useGetAuthData';
import useCheckSessions from '../../hooks/thirdWeb-hooks/useCheckSessions';
import { useRouter } from 'next/router';

const Header = () => {
  const sdk = useGetSdk();
  const route = useRouter();
  const { address } = useGetAddress();
  const [state, setState] = useState(false);
  const { showConnectWallet, isConnectWalletModalOpen } =
    useConnectWalletModalStates();
  useIsDisconnected();

  useGetAuthData();
  useCheckSessions();
  const { hideSignToMetamask, isSignModalOpen, showSignToMetamask } =
    useGetSignModalStates();

  const { networkMismatch, swithToTargetNetwork } = useSwitchNetwork();

  const handleState = () => {
    setState(!state);
  };

  const [comunitystate, comunitysetState] = useState(false);
  const handleCommunityState = () => {
    comunitysetState(!comunitystate);
  };
  // const contract = useContract(
  //   '0xA32F2A1A7CDa82999d4764e607aF728F3771Bd53',
  //   'nft-collection'
  // );

  // const getContractObject = async () => {
  //   const contract = await sdk?.getContract(
  //     '0xA32F2A1A7CDa82999d4764e607aF728F3771Bd53',
  //     'nft-collection'
  //   );

  //   return contract;
  // };
  const [pagesState, PagesSetstate] = useState(false);
  const handlepagesState = () => {
    PagesSetstate(!pagesState);
  };
  const [toggleState, togglesetState] = useState(false);
  const handletoggleState = () => {
    togglesetState(!toggleState);
  };

  const handleWalletConnect = () => {
    if (!address) {
      showConnectWallet();
    } else {
      showSignToMetamask();
    }
  };

  // useEffect(() => {
  //   if (networkMismatch) {
  //     swithToTargetNetwork();
  //     toast.error('Please change network from metamask');
  //   }
  // }, [netw]);

  // const getTokenId = async () => {
  //   // console.log(contract );
  //   const cont = await getContractObject();

  //   await cont
  //     ?.transfer('0x6bd65E36EA43D27a731Ad53A78C907d3FDb97C74', 16)
  //     .then((res) => console.log(res));
  // };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="container mx-auto max-w-[1160px]">
        <nav className="px-2 bg-white">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <span className={styles.testFont} onClick={() => route.push('/')}>
                <Image src={logo} width="90" height="40" alt="logo"></Image>
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={handletoggleState}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {toggleState && (
              <div className=" absolute right-10 top-12 mt-1">
                <div
                  id=""
                  className=" font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-blue-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div className=" hidden w-full md:block md:w-auto" id="">
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                  <a
                    href="#"
                    className="testNav block py-2 pl-3 pr-4 text-black rounded md:p-0"
                    aria-current="page"
                  >
                    <span className="font-bold">Home</span>
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={handleState}
                    className="{styles.testNav } testNav flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400"
                  >
                    <span className="font-bold">Explore</span>{' '}
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {state && (
                    <div
                      id="dropdownNavbar"
                      className="z-10 absolute top-10 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44  dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li onClick={() => route.push('explore')}>
                          <a
                            href="#"
                            className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Explore
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <span className="font-bold"> Profile</span>
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={handleCommunityState}
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400  dark:focus:text-white"
                  >
                    <span className="font-bold"> Community</span>{' '}
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {comunitystate && (
                    <div
                      id="dropdownNavbar"
                      className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-blue-700  dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={handlepagesState}
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400  dark:focus:text-white"
                  >
                    <span className="font-bold"> Pages</span>{' '}
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  {pagesState && (
                    <div
                      id="dropdownNavbar"
                      className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded shadow w-44"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-700 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    <span className="font-bold"> Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="hidden pt-4 pb-4 px-5 lg:block border-2 items-center bg-blue-700 roun border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={handleWalletConnect}
            >
              <span className="inline-flex gap-2 items-center">
                {' '}
                <WalletIcon />
                <span className="font-bold"> Wallet Connect</span>{' '}
              </span>
            </button>
          </div>
        </nav>
      </div>
      {isConnectWalletModalOpen && <ConnectWalletModal />}
      {isSignModalOpen && <SignToMetamask sdk={sdk} />}
    </>
  );
};

export default Header;
