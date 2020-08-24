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

module.exports = middle;