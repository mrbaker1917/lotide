const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (arr1, arr2) => {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (eqArrays(arr1, arr2)) {
    console.log(`${p}${p}${p} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;