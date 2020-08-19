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
    console.log(`${p}${p}${p} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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