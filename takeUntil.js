const takeUntil = function(array, callback) {
  let results = [];
  for (let elem of array) {
    if (!callback(elem)) {
      results.push(elem);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;