import React from 'react';
import CheckboxDropdown from '../Common/CheckboxDropdown';
import FilterPriceDropdown from '../Common/FilterPriceDropdown';

const CollectionDetailFilters = () => {
  const status = ['Buy Now', 'On Auction', 'Has Offers', 'New'];
  const categories = [
    'Art',
    'Music',
    'Domain Names',
    'Virtual Worlds',
    'Trading Cards',
    'Collectibles',
    'Sports',
    'Utility',
  ];
  const chains = ['Ethereum', 'Polygon', 'Klaytn'];
  const collections = [
    'Abstraction',
    'Patternlicious',
    'Skecthify',
    'Cartoonism',
    'Virtuland',
    'Papercut',
  ];
  const currency = ['ETH', 'WETH', 'APE', 'ASH', 'AVAX'];
  return (
    <div className="static max-w-[245px] w-full">
      <CheckboxDropdown name="Status" data={status} />
      <CheckboxDropdown name="Categories" data={categories} />
      <CheckboxDropdown name="Chains" data={chains} />
      <CheckboxDropdown name="Collections" data={collections} />
      <CheckboxDropdown name="Currency" data={currency} />
      <FilterPriceDropdown />
    </div>
  );
};

export default CollectionDetailFilters;
