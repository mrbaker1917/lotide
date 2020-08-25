const without = (sourceArray, stuffToRemove) => {
  let arr = sourceArray.filter(i => {
    if (stuffToRemove.indexOf(i) !== -1) {
      return false;
    } else {
      return true;
    }
  });
  return arr;
};

module.exports = without;