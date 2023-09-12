import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setAddress } from '../redux-toolkit/slices/authSlice';
import { openConnectWallet } from '../redux-toolkit/slices/ModalSlices';
import {
  setReadSdk,
  setSdk,
} from '../redux-toolkit/slices/thirdWebConfigSlice';
import store, { persistor } from '../redux-toolkit/store';
import isEmpty from '../src/utils/isEmpty';
// import store from '../redux-toolkit/store';
import '../styles/globals.css';
import { thirdWebConfig } from '../constants/ThirdWeb/config/config';
import 'react-loading-skeleton/dist/skeleton.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Goerli } from '@thirdweb-dev/chains';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const sdk = ThirdwebSDK.fromSigner(signer, 'goerli');
        const readSdk = new ThirdwebSDK('goerli');
        store.dispatch(setReadSdk(readSdk));
        await sdk?.wallet?.connect(signer);
        store.dispatch(setSdk(sdk));
        store.dispatch(setAddress(address));
        const address = await sdk?.wallet?.getAddress();
        ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        if (isEmpty(store?.getState()?.authSlice?.address)) {
          store.dispatch(openConnectWallet());
        }
      }
    })();
  }, [store?.getState()?.authSlice?.address]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThirdwebProvider
          activeChain={Goerli}
          authConfig={{
            domain: 'optimusfox.com',
            authUrl: '/auth',
          }}
          // activeChain={Goerli}
          // desiredChainId={thirdWebConfig.chainId}
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </PersistGate>
    </Provider>
  );
}

// export async function getServerSideProps() {
//   const sdk = new ThirdwebSDK(thirdWebConfig?.chainId);

//   return {
//     props: { sdk: sdk },
//   };
// }
