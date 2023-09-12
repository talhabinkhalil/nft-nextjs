import { useAddress, useMetamask } from '@thirdweb-dev/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import useConnectWalletModalStates from '../../../hooks/redux-toolkit/useConnectWalletModalStates';
import useGetAddress from '../../../hooks/thirdWeb-hooks/useGetAddress';
import { showWalletAddress } from '../../../utils/showWalletAddress';

const ReviewedCollection = (props) => {
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
                   This is an un reviewed collection
                  </h3>
                  <div className="mt-2">
                    <p className="flex text-center text-sm text-[#7A798A]-700 justify-center">
                    Review this information to ensure its’s what you want to buy</p>
                  </div>
                </div>
                <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7]"></hr>
          <div className='mx-6 my-6 p-6 rounded-xl border border-[#E7E7E7] '>
          <div className='flex justify-start'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Collection name</p>
              <p className='pl-6 text-1xl text-[#6E37FF] font-bold'>Untitled Collection #16950541</p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>

        <div className='flex justify-start pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Creator</p>
              <p className='pl-20 text-1xl text-[#6E37FF] font-bold'>8D4F85<span className='text-[#5A5A5A]'>(member since Dec 28, 2022)</span></p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>
        <div className='flex justify-start pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Total Sale</p>
              <p className='pl-16 text-1xl text-[#1F1F2C] font-bold'>1 sale</p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>
        <div className='flex justify-start pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Total Volume</p>
              <p className='pl-10 text-1xl text-[#1F1F2C] font-bold'>0.00000000000000001 ETH <span className='text-[#5A5A5A]'>($0.00)</span></p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>
        <div className='flex justify-start pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Social Links</p>
              <p className='pl-14 text-1xl text-[#1F1F2C] font-bold'>Not Specified</p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>
          </div>
            <div className="bg-white-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="button"
                className="mt-3 inline-flex w-full  rounded-md border border-gray-300 bg-black px-4 py-2 text-base font-medium text-[#fff] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => props.setShow(false)}
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full  rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => props.setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReviewedCollection;
