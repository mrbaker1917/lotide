const assertArraysEqual = require('./assertArraysEqual');

const middle = arr => {
  const midIndexArr = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(midIndexArr - 1, midIndexArr + 1);
  } else {
    return arr.slice(midIndexArr, midIndexArr + 1);
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c', 'd']); // to make sure assertArrayEqual is working properly
const arr3 = [4, 5, 6, 7, 8, 9];
const result = middle(arr3);
assertArraysEqual(result, [6, 7]); // this is to make sure middle() is not changing original array.
