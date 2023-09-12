import store from '../../redux-toolkit/store';
import {
  startPrimaryLoadingFunc,
  stopPrimaryLoadingFunc,
} from '../../src/utils/useLoadingsFunc';
import { marketPlaceObjectFunc } from '../../src/utils/useMarketPlaceObject';

export const getDirectMarketPlaceOffers = async (id) => {
  // startPrimaryLoadingFunc();
  const mpContract = await marketPlaceObjectFunc();
  const offers = mpContract.getOffers(id);
  // stopPrimaryLoadingFunc();
  return offers;
};
