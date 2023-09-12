import { toast } from 'react-hot-toast';
import { marketPlaceObjectFunc } from '../../src/utils/useMarketPlaceObject';

const acceptOffer = async (listingId, offeror) => {
  try {
    const mpContract = await marketPlaceObjectFunc('write');
    const result = await mpContract.direct.acceptOffer(listingId, offeror);
    return result;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export { acceptOffer };
