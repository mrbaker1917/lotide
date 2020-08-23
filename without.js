const assertArraysEqual = require('./assertArraysEqual');

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

assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["dog", "cat", "bird"], ["bird"]), ["dog"]);

const words = ["hello", "world", "lighthouse"];
without(words, "lighthouse");
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
