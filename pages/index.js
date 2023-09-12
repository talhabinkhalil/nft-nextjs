import Steps from '../src/components/Landingpage/Steps';
import Footer from '../src/components/Layout/Footer';
import Header from '../src/components/Layout/Header';
import HeroSection from '../src/components/Landingpage/HeroSection';
// import LiveAuction from "../src/components/Landingpage/LiveAuction";
import PopularCollection from '../src/components/Landingpage/PopularCollection';
import { TodayPicks } from '../src/components/Landingpage/TodayPicks';
import LiveAuction from '../src/components/Landingpage/LiveAuction';
import { useSelector } from 'react-redux';
import useGetSdk from '../src/hooks/redux-toolkit/useGetSdk';
import useGetAddress from '../src/hooks/thirdWeb-hooks/useGetAddress';
import useConnectWalletModalStates from '../src/hooks/redux-toolkit/useConnectWalletModalStates';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
export default function Home() {
  return (
    <>
      <WithHeaderFooter>
        <HeroSection />
        <Steps />
        <LiveAuction />
        <TodayPicks />
        <PopularCollection />
      </WithHeaderFooter>
    </>
  );
}
