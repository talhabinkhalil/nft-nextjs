export const showWalletAddress = (address) => {
  if (typeof address == 'string') {
    return address.substring(0, 8) + ' ......... ' + address.slice(-5);
  }
};
