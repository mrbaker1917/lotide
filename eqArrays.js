const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should pass
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should pass
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); //=> should pass
