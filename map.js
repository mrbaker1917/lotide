const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const provinces = ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];
const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};
// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);
assertArraysEqual(map(numbers, n => n * n), [81, 64, 49, 36, 25, 16, 9, 4, 1]);
assertArraysEqual(map(numbers, n => n * 11), [99, 88, 77, 66, 55, 44, 33, 22, 11]);
assertArraysEqual(map(provinces, p => p.length), [7,16,8,12,13,11,7,20,6,12]);