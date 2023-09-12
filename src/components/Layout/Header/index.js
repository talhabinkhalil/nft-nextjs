import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import ConnectWalletModal from '../../Modals/WalletModals/ConnectWalletModal';
import useConnectWalletModalStates from '../../../hooks/redux-toolkit/useConnectWalletModalStates';
import useGetAddress from '../../../hooks/thirdWeb-hooks/useGetAddress';
import useIsDisconnected from '../../../hooks/thirdWeb-hooks/useIsDisconnected';
import useGetSdk from '../../../hooks/redux-toolkit/useGetSdk';
import useGetSignModalStates from '../../../hooks/redux-toolkit/useGetSignModalStates';
import useGetAuthData from '../../../hooks/thirdWeb-hooks/useGetAuthData';
import useCheckSessions from '../../../hooks/thirdWeb-hooks/useCheckSessions';
import SignToMetamask from '../../Modals/WalletModals/SignToMetamask';
import logo from '/public/Logo.svg';
import NavLinks from './NavLinks';
import WalletIcon from '../../Icons/WalletIcon';
import ReviewedCollection from '../../Modals/ReviewedCollection/ReviewedCollection';
import PlaceBid from '../../Modals/PlaceBid/PlaceBid';
import NftMarket from '../../Modals/NftMarket/NftMarket';
import { useAddress } from '@thirdweb-dev/react';

const index = (props) => {
  const sdk = useGetSdk();
  const route = useRouter();
  const { address } = useGetAddress();
  const addressFromSdk = useAddress();
  const [state, setState] = useState(true);
  const [show, setShow] = useState(false);

  const { showConnectWallet, isConnectWalletModalOpen } =
    useConnectWalletModalStates();
  useIsDisconnected();

  useGetAuthData();
  useCheckSessions();
  const { hideSignToMetamask, isSignModalOpen, showSignToMetamask } =
    useGetSignModalStates();

  const handleState = () => {
    setState(!state);
  };
  const handleClick = () => {
    setShow('');
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
    if (!address || !addressFromSdk) {
      showConnectWallet();
    } else {
      showSignToMetamask();
      // showSignToMetamask;
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="container mx-auto max-w-[1160px]">
        <nav className="flex items-center justify-between py-[10px]">
          <a href="#" className="flex items-center">
            <span onClick={() => route.push('/')}>
              <Image src={logo} width="90" height="40" alt="logo"></Image>
            </span>
          </a>
          <NavLinks />
          <button
            type="button"
            className="flex flex-row items-center justify-center gap-2 py-4 px-[35px] text-white text-[15px] font-bold whitespace-nowrap bg-[#5142FC] border-2 border-[#6E37FF] rounded-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={handleWalletConnect}
          >
            <WalletIcon />
            Wallet Connect
          </button>
          <button
            type="button"
            className="flex flex-row items-center justify-center gap-2 py-4 px-[35px] text-white text-[15px] font-bold whitespace-nowrap bg-[#5142FC] border-2 border-[#6E37FF] rounded-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => {
              setShow(true);
            }}
          >
            <WalletIcon />
            Wallet Connect
          </button>
        </nav>
      </div>
      {isConnectWalletModalOpen && <ConnectWalletModal />}
      {isSignModalOpen && <SignToMetamask sdk={sdk} />}
      {/* {show && <ReviewedCollection setShow={setShow}/>} */}
      {/* {show && <PlaceBid setShow={setShow}/>} */}
      {show && <NftMarket setShow={setShow} />}
    </>
  );
};

export default index;
