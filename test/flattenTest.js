const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5, 6] for [1, [2], [3, 4], [5], [6]]", () => {
    assert.deepEqual(flatten([1, [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 'cat', 5, 6] for [1, 2, [3, 'cat'], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 'cat'], 5, [6]]), [1, 2, 3, 'cat', 5, 6]);
  });
  it("returns [1, 2, 3, 'cat', 5, 6] for [1, [2, [[3, ['cat']], 5], [6]]]", () => {
    assert.deepEqual(flatten([1, [2, [[3, ['cat']], 5], [6]]]), [1, 2, 3, 'cat', 5, 6]);
  });
  it("returns flat array from very deep array of arrays", () => {
    const input = [[[[4]]], [[[5, 6]]], [6,7,8], [[[[5, [[[7]]]]]]]];
    const actual = flatten(input);
    const expected = [4, 5, 6, 6, 7, 8, 5, 7];
    assert.deepEqual(actual, expected);
  });
});