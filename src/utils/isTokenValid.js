export const isTokenValid = (expiryDate) => {
  if (new Date() < new Date(expiryDate)) {
    return true;
  } else {
    return false;
  }
};
