const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns ['c'] for ['a', 'b', 'c', 'd', 'e']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
  });
  it("returns ['c', 'd'] for ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c', 'd']);
  });
  it("tests that original array is not changed", () => {
    const arr3 = [4, 5, 6, 7, 8, 9];
    middle(arr3);
    assert.strictEqual(arr3.length, 6);
  });
});