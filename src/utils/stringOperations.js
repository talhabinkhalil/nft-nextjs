export const getAddressIdFromString = (addressId, separator = '-') => {
  const addressWithId = addressId.split(separator);

  return { contractAddress: addressWithId[0], tokenId: addressWithId[1] };
};
