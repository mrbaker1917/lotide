const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 5 for [5, 3, 7, 8]", () => {
    assert.strictEqual(head([5, 3, 7, 8]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 7 for [7]", () => {
    assert.strictEqual(head([7]), 7);
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});