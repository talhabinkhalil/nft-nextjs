import { thirdWebConfig } from '../../constants/ThirdWeb/config/config';
import store from '../../redux-toolkit/store';

export const marketPlaceObjectFunc = async (readWrite = 'read') => {
  let sdk;
  if (readWrite == 'read') {
    sdk = store.getState()?.thirdWebConfigSlice?.readSdk;
  } else if (readWrite == 'write') {
    sdk = store.getState()?.thirdWebConfigSlice?.sdk;
  }
  const marketPlaceContract = await sdk?.getContract(
    thirdWebConfig.marketPlaceContractAddress,
    'marketplace'
  );
  return marketPlaceContract;
};
