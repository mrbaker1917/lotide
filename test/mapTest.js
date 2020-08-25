const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns first letter of array of words as array", () => {
    assert.deepEqual(map(words, x => x[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns the squares of an array of numbers", () => {
    assert.deepEqual(map(numbers, n => n * n), [81, 64, 49, 36, 25, 16, 9, 4, 1]);
  });
  it("returns the names of provinces with less than 9 letter", () => {
    assert.deepEqual(map(provinces, p => {if (p.length < 9) {return "short"} else { return "long"}}), 
    ["short", "long", "short", "long", "long", "long", "short", "long", "short", "long"]);
  });
  it("returns length of provinces' names", () => {
    assert.deepEqual(map(provinces, p => p.length), [7,16,8,12,13,11,7,20,6,12]);
  });
});

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const provinces = ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];