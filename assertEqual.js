const assertEqual = function(actual, expected) {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("dog", "dog");
// assertEqual("dog", "Dog");
// assertEqual(456, 456);
// assertEqual(456, 456.1);