import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../../../services/auth/login';
import useGetSignModalStates from '../../../hooks/redux-toolkit/useGetSignModalStates';
import useGetAddress from '../../../hooks/thirdWeb-hooks/useGetAddress';
import isEmpty from '../../../utils/isEmpty';
import useSwitchNetwork from '../../../hooks/thirdWeb-hooks/useSwitchNetwork';
import {
  useSDK,
  useNetworkMismatch,
  useLogin,
  useAuth,
  useConnect,
  // useAuth,
} from '@thirdweb-dev/react';
import MetaMask from '../../Icons/Metamask';
import { ThirdwebAuth, LoginPayloadSchema } from '@thirdweb-dev/auth';
import { ethers } from 'ethers';
import axios from 'axios';
import { login } from '../../../../services/auth/login';
import useGetSdk from '../../../hooks/redux-toolkit/useGetSdk';

const SignToMetamask = ({ sdk }) => {
  const dispatch = useDispatch();
  const { address } = useGetAddress();
  // const thirdwebAuth = useAuth();
  const thirdwebAuth = useAuth();
  const [{ data }, connect] = useConnect();

  const { hideSignToMetamask, isSignModalOpen, showSignToMetamask } =
    useGetSignModalStates();
  const { networkMismatch, swithToTargetNetwork } = useSwitchNetwork();

  const signToMetaMask = async () => {
    if (networkMismatch) {
      swithToTargetNetwork();
    } else {
      if (data?.connected) {
        try {
          let expiryDate = new Date();
          const data = await thirdwebAuth?.login({
            expirationTime: new Date(
              expiryDate.setMinutes(expiryDate.getMinutes() + 10)
            ),
            invalidBefore: new Date(),
            domain: 'optimusfox.com',
            uri: 'optimusfox.com',
          });

          login(data, dispatch, hideSignToMetamask);

          // const res = await authSdk
          //   .login({
          //     chainId: '5',
          //     domain: 'optimusfox.com',
          //     nonce: 'c9ddf8be-c1d7-4f26-a0d4-3d7fd97edeb5',
          //     uri: 'fixfox.com',
          //     expirationTime: new Date('2023-03-23T18:50:55.750Z'),
          //     invalidBefore: new Date('2023-03-23T17:28:32.766Z'),
          //     issued_at: new Date('2023-03-23T17:28:32.766Z'),
          //     statement: 'Hello there',
          //     version: '1',
          //   })
          //   .then((res) => console.log(res));
          // console.log('res', res);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return !isEmpty(address) && isSignModalOpen ? (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5  sm:p-6 sm:pb-4">
              <h3
                className="text-center text-4xl font-bold  text-[#1F1F2C]-700"
                id="modal-title"
              >
                Connect Your Wallet
              </h3>
              <div className="pt-3">
                <p className="flex text-center text-sm text-[#7A798A]-700 justify-center">
                  If you don;t have a wallet yet, you can select a provider and
                  create one now.
                </p>
              </div>
            </div>
            <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7]"></hr>
            <div className=" pt-6 px-6 ">
              <div
                onClick={signToMetaMask}
                className="flex p-2  border-2 border-[#6E37FF] rounded-xl"
              >
                <span>
                  <MetaMask />
                </span>
                <p className="pl-5 pt-2 flex  text-1xl font-bold text-[#1F1F2C] ">
                  MetaMask
                  <span className="pl-3 text-1xl font-bold text-[#6E37FF]">
                    (popular)
                  </span>
                </p>
              </div>
            </div>
            <div className=" pt-6 px-6 ">
              <div className="flex p-2  border-2 border-[#E5E5E5] rounded-xl">
                <span>
                  <MetaMask />
                </span>
                <p className="pl-5 pt-2 flex  text-1xl font-bold text-[#1F1F2C] ">
                  Coinbase Wallet
                </p>
              </div>
            </div>
            <div className=" pt-6 px-6 ">
              <div className="flex p-2  border-2 border-[#E5E5E5] rounded-xl">
                <span>
                  <MetaMask />
                </span>
                <p className="pl-5 pt-2 flex  text-1xl font-bold text-[#1F1F2C] ">
                  WalletConnect
                </p>
              </div>
            </div>
            <div className=" pt-6 px-6 ">
              <div className="flex p-2  border-2 border-[#E5E5E5] rounded-xl">
                <span>
                  <MetaMask />
                </span>
                <p className="pl-5 pt-2 flex  text-1xl font-bold text-[#1F1F2C] ">
                  Ledger
                </p>
              </div>
            </div>
            <div className=" pt-6 px-6 ">
              <div className="flex p-2  border-2 border-[#E5E5E5] rounded-xl">
                <span>
                  <MetaMask />
                </span>
                <p className="pl-5 pt-2 flex  text-1xl font-bold text-[#1F1F2C] ">
                  Phantom
                </p>
              </div>
            </div>
            <div className="flex mt-5 mb-5 ml-3 mr-5 justify-center">
              <button
                style={{ width: '100%' }}
                type="button"
                className="rounded-2xl text-[#000]   border-2 border-gray bg-white px-2 py-2 font-bold text-gray focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto "
                onClick={() => hideSignToMetamask()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default SignToMetamask;
