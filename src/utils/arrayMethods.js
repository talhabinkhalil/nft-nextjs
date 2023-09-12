const concatArrays = (...arrays) => {
  let concatenatedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      concatenatedArray.push(...arrays[i]);
    } else return false;
  }
  return concatenatedArray;
};

export { concatArrays };
