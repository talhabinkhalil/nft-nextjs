import { marketPlaceObjectFunc } from '../../src/utils/useMarketPlaceObject';

const getActiveListingsOfMarketPlace = async (address) => {
  const mpContract = await marketPlaceObjectFunc();
  const activeListings = await mpContract?.getActiveListings({
    seller: address,
  });

  return activeListings;
};

export { getActiveListingsOfMarketPlace };
