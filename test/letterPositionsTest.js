const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns '{ h: [0], e: [1], l: [2, 3], o: [4] }' for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  it("returns '{a: [0, 2], b: [1, 3, 5, 7], c: [6, 8], d: [10, 11], f: [12, 14], g: [13]}' for 'abab bcbc ddfgf'", () => {
    assert.deepEqual(letterPositions("abab bcbc ddfgf"), {a: [0, 2], b: [1, 3, 5, 7], c: [6, 8], d: [10, 11], f: [12, 14], g: [13]});
  });
});
