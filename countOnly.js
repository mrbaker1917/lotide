const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name] === true) {
      result[name] = undefined;
    }
  }
  for (const item of allItems) {
    if (Object.prototype.hasOwnProperty.call(result, item) && result[item] !== undefined) {
      result[item] += 1;
    } else if (Object.prototype.hasOwnProperty.call(result, item) && result[item] === undefined) {
      result[item] = 1;
    }
  }
  return result;
};

module.exports = countOnly;