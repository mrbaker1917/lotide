const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (eqArrays(arr1, arr2)) {
    console.log(`${p}${p}${p} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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