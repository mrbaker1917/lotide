const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns array [3] from [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1, 2]), [3]);
  });
  it("returns ['1', '2'] from ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns ['dog'] from ['dog', 'cat', 'bird']", () => {
    assert.deepEqual(without(["dog", "cat", "bird"], ["bird", "cat"]), ["dog"]);
  });
});