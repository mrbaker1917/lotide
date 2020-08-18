const assertEqual = function(actual, expected) {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should pass