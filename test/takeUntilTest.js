const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns given array of words till word starts with 'm'", () => {
    assert.deepEqual(takeUntil(words, word => word[0] === "m"), ["ground", "control", "to"]);
  });
  it("returns array of numbers that are greater than 4", () => {
    assert.deepEqual(takeUntil(numbers, n => n === 4), [9, 8, 7, 6, 5]);
  });
  it("returns alpha list of province names until one starts with 'O'", () => {
    assert.deepEqual(takeUntil(provinces, p => p[0] === "O"), ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia"]);
  });
  it("returns an array of province names until last letter is 'd'", () => {
    assert.deepEqual(takeUntil(provinces, p => p[p.length - 1] === "d"), ["Alberta", "British Columbia", "Manitoba"]);
  });
});

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const provinces = ["Alberta", "British Columbia", "Manitoba", "Newfoundland", "New Brunswick", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];