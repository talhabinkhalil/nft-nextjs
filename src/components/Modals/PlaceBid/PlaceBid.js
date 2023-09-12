import { useAddress, useMetamask } from '@thirdweb-dev/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import useConnectWalletModalStates from '../../../hooks/redux-toolkit/useConnectWalletModalStates';
import useGetAddress from '../../../hooks/thirdWeb-hooks/useGetAddress';
import { showWalletAddress } from '../../../utils/showWalletAddress';

const PlaceBid = (props) => {
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
                  Place bid
                  </h3>
                </div>
                <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7]"></hr>
                <div className='flex justify-between pt-3 px-8 pt-4'>
                  <div className='flex'>
                    <div></div>
              
              <div>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Best Price</p>
                <p className='text-sm text-[#979797]'>Collection number #12345689998</p></div>
                  </div>
                  <div>
              <p className=' text-1xl text-[#1F1F2C] font-bold'>0.001 WETH </p>
              <p className='text-sm text-[#979797]'>($ 1.58)</p>
                  </div>
        </div>
          <div className='mx-6 my-6 p-6 rounded-xl border border-[#E7E7E7] '>
          <div className='flex justify-between'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Balance</p>
              <p className='pl-6 text-1xl text-[#5A5A5A] font-bold'>0 WETH</p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>

        <div className='flex justify-between pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Floor Price</p>
              <p className=' text-1xl text-[#6E37FF] font-bold'>--------</p>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-[#E7E7E7] mt-4"></hr>
        <div className='flex justify-between pt-3'>
              <p className='text-1xl text-[#1F1F2C]-700 font-bold'>Best Price</p>
              <p className=' text-1xl text-[#1F1F2C] font-bold'>--------</p>
        </div>
        </div>
        <div className='flex justify-between  pl-6 border border-[#E5E5E5] rounded-xl mx-6 pl-6'>
              <p className='text-1xl text-[#979797]-700 font-bold pt-3'>0.001</p>
              <p className=' text-1xl text-[#1F1F2C] font-bold border border-[#5142FC] px-6 py-2'>WETH</p>
        </div>
        <div className='flex justify-start pt-6 pl-6'>
              <p className='text-1xl text-[#979797] font-bold'>Total:</p>
              <p className=' text-1xl text-[#1F1F2C] font-bold pl-4'>$ 1.58</p>
        </div>
        <div className='flex justify-start pt-3 pl-6'>
              <p className='text-1xl text-[#979797] font-bold'>Total offered Amount:</p>
              <p className=' text-1xl text-[#1F1F2C] font-bold pl-4'>0.001 WETH ($ 1.58)</p>
        </div>
          
            <div className="bg-white-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="button"
                className="mt-3 ml-2 w-full  rounded-md border border-gray-300 bg-black text-white py-2"
                onClick={() => props.setShow(false)}
              >
                Add WETH
              </button>
              <button
                type="button"
                className="mt-3  w-full  rounded-md border border-gray-300 bg-white text-center py-2"
                onClick={() => props.setShow(false)}
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PlaceBid;
