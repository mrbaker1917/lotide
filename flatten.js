const assertArraysEqual = require('./assertArraysEqual.js');

const flatten = arr => {
  let flatArray = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let j of i) {
        flatArray.push(j);
      }
    } else {
      flatArray.push(i);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 'cat'], 5, [6]]), [1, 2, 3, 'cat', 5, 6]);