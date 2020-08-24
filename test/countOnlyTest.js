const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it("returns correct count for firstNames array", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Jasper": true});
    const expected = {"Jason": 1, "Karima": undefined, "Fang": 2, "Jasper": undefined};
    assert.deepEqual(actual, expected);
  });
  it("returns correct count for firstNames array with falses", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false, "Jasper": true});
    const expected = {"Jason": 1, "Karima": undefined, "Jasper": undefined};
    assert.deepEqual(actual, expected);
  });
  it("returns correct count for firstNames array with trues", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Jasper"];
    const actual = countOnly(firstNames, { "Jason": true, "Salima": true, "Fang": true, "Jasper": true});
    const expected = {"Jason": 1, "Salima": 2, "Fang": 2, "Jasper": 1};
    assert.deepEqual(actual, expected);
  });
});
