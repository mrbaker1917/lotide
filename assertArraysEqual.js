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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['dog', 'cat', 'bird'], ['dog', 'cat', 'bird']);
assertArraysEqual(['dog', 'cat', 'bird'], ['dog', 'cat', 'birb']);