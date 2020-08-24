const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns 'drama' for value 'The Wire'", () => {
    const bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns 'comedy' for value 'Brooklyn Nine-Nine'", () => {
    const bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("returns undefined for value 'That 70s Show'", () => {
    const bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});