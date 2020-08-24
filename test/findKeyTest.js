const findKey = require('../findKey');
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns key 'Akaleri' for movie with rating 3", () => {
    const movies = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 5 }
    };
    assert.strictEqual(findKey(movies, x => x.stars === 3), 'Akaleri');
  });
  it("returns key 'noma' for movie with rating 2", () => {
    const movies = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 5 }
    };
    assert.strictEqual(findKey(movies, x => x.stars === 2), 'noma');
  });
  it("returns '3' for word length > 3", () => {});
  const nums = {1: "one", 2: "two", 3: "three", 4: "four"};
  assert.strictEqual(findKey(nums, x => x.length > 3), '3');
});