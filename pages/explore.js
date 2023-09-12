import React from 'react';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
import HeroSectionExplore from '../src/components/Explore/HeroSectionExplore';
import Header from '../src/components/Layout/Header';
const Explore = () => {
  return (
    <div>
      <WithHeaderFooter>
        <HeroSectionExplore />
      </WithHeaderFooter>
    </div>
  );
};

export default Explore;
