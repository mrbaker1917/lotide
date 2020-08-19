const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k in object1) {
    if (Array.isArray(object1[k])) {
      return eqArrays(object1[k], object2[k]);
    } else {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (eqObjects(object1, object2)) {
    console.log(`${p}${p}${p} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({a: 1}, {a: 1});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3});
assertObjectsEqual({b: 2, a: 1}, {a: 1, b: 2});