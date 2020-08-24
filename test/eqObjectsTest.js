const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for same object, different prop order", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns true for different objects with arrays as values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for objects with different number of props", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("returns true for objects within objects", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: {f: 2} }, { a: { z: 1 }, b: {f: 2} }), true);
  });
  it("returns false for deeply imbedded objects with one small difference", () => {
    assert.strictEqual(eqObjects({ a: 5, z: 1, b: {f: {p: {l: {m:{d: 98}}}}}, v: {q: {n: {x: {s: {r2: 98}}}}} }, { a: 5, z: 1, b: {f: {p: {l: {m:{d: 98}}}}}, v: {q: {n: {x: {s: {r2: 99}}}}} }), false);
  });
});
