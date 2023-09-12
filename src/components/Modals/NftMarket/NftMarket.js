import { useAddress, useMetamask } from '@thirdweb-dev/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import useConnectWalletModalStates from '../../../hooks/redux-toolkit/useConnectWalletModalStates';
import useGetAddress from '../../../hooks/thirdWeb-hooks/useGetAddress';
import { showWalletAddress } from '../../../utils/showWalletAddress';

const NftMarket = (props) => {
  const { isConnectWalletModalOpen, hideConnectWallet } =
    useConnectWalletModalStates();
  const connectWithMetamask = useMetamask();

  const { address, setWalletAddress } = useGetAddress();

  const handleMetamaskLogin = async () => {
    try {
      connectWithMetamask()
        .then(({ data }) => {
          setWalletAddress(data?.account);
          hideConnectWallet();
        })
        .catch((err) => {});
    } catch (error) {}
    // if (address) {
    //   toast('Wallet is already connected');
    // } else {
    //   try {
    //     connectWithMetamask()
    //       .then(({ data }) => {
    //         setWalletAddress(data?.account);
    //         hideConnectWallet();
    //       })
    //       .catch((err) => {});
    //   } catch (error) {}
    // }
  };

  return  (
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
                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div> */}
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left pt-12 pb-6">
                  <h3
                    className="text-center text-3xl font-bold  text-[#1F1F2C]-700"
                    id="modal-title"
                  >
                 Welcome to NFT Marketplace
                  </h3>
                </div>
                <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7]"></hr>
                <div className='flex justify-between pt-3 px-8 pt-4'>
                  <div className='flex'>
                   
              
            
                  </div>
                
                    </div>
                    <div className='bg-[#F6F6F6] p-6 m-10'>
                        <p className='text-center text-[#1F1F2C] font-bold'>By Connecting you wallet and using  NFT Marketplace, you agree to our <span className='text-[#5142FC] font-bold pl-1'>Terms of Services</span> and<span className='text-[#5142FC] font-bold pl-1'>Privacy Policy</span> </p>
                        </div>



            <div className="bg-white-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="button"
                className="mt-3 ml-2 w-full  rounded-3xl font-bold border border-gray-300 bg-[#fff] text-[#979797] py-2"
                onClick={() => props.setShow(false)}
              >
               Cancel
              </button>
              <button
                type="button"
                className="mt-3  w-full  rounded-3xl font-bold border border-gray-300 bg-[#5142FC] text-[#fff] text-center py-2"
                onClick={() => props.setShow(false)}
              >
                Accept and Sign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NftMarket;
