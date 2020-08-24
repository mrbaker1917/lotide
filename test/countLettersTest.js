const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#counteLetters", () => {
  it("returns an object counting each letter of 'lighthouse in the house'", () => {
    const actual = countLetters("lighthouse in the house");
    const expected = {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1};
    assert.deepEqual(actual, expected);
  });
  it("returns an object counting letters for 'anaconda'", () => {
    const actual = countLetters("anaconda");
    const expected = {a: 3, n: 2, c: 1, o: 1, d: 1};
    assert.deepEqual(actual, expected);
  });
  it("returns an object counting letters for ' a n a c o n d a  '", () => {
    const actual = countLetters(" a n a c o n d a  ");
    const expected = {a: 3, n: 2, c: 1, o: 1, d: 1};
    assert.deepEqual(actual, expected);
  });
  it("returns an object counting letters for ' b   l i n  g i n g '", () => {
    const actual = countLetters(" b   l i n  g i n g ");
    const expected = {b: 1, l: 1, i: 2, n: 2, g: 2};
    assert.deepEqual(actual, expected);
  });
}); 