const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[1], 'Labs');
  });
  it("tests that tail() does not alter original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("returns an empty array for [9], cause no tail", () => {
    const arr1 = [9];
    let tailArr = tail(arr1);
    assert.strictEqual(tailArr.length, 0);
  });
});