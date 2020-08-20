const assertEqual = function(actual, expected) {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let k in object) {
    if (callback(object[k])) {
      return k;
    }
  }
};

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
};

const nums = {1: "one", 2: "two", 3: "three", 4: "four"};

assertEqual(findKey(movies, x => x.stars === 4), undefined);
assertEqual(findKey(movies, x => x.stars === 3), "Akaleri");
assertEqual(findKey(movies, x => x.stars > 3), "Akelarre");
assertEqual(findKey(nums, x => x.length > 3), '3');