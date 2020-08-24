const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for arrays: [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for arrays: [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for arrays: ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for arrays: ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("returns true for arrays within arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3, [2, [4, [5], 6], 3, 4]], [1, 2, 3, [2, [4, [5], 6], 3, 4]]), true);
  });
  it("returns false for arrays within arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3, [2, [4, [5], 6], 3, 4]], [1, 2, 3, [2, [4, [4], 6], 3, 4]]), false);
  });
});