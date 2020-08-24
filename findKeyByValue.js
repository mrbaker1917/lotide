const findKeyByValue = (obj, val) => {
  for (let k in obj) {
    if (obj[k] === val) {
      return k;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;