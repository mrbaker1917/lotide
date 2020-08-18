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
