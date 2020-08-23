const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;

assertObjectsEqual({a: 1}, {a: 1});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3});
assertObjectsEqual({b: 2, a: 1}, {a: 1, b: 2});