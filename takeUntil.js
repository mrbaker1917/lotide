const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const provinces = ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];

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

assertArraysEqual(takeUntil(words, word => word[0] === "m"), ["ground", "control", "to"]);
assertArraysEqual(takeUntil(numbers, n => n === 4), [9, 8, 7, 6, 5]);
assertArraysEqual(takeUntil(provinces, p => p[0] === "O"), ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia"]);
assertArraysEqual(takeUntil(provinces, p => p[p.length - 1] === "d"), ["Alberta", "British Columbia", "Manitoba"]);