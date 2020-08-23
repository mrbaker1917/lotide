const assertEqual = (actual, expected) => {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k in object1) {
    if (Array.isArray(object1[k])) {
      return eqArrays(object1[k], object2[k]);
    } else if (typeof object1[k] === 'object') {
      return eqObjects(object1[k], object2[k]);
    } else {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
  }
  return true;
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: {q: {x: {r: 3}}}, z: 1 }, b: 2 }, { a: { y: {q: {x: {r: 3}}}, z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: {q: {x: {r: 4}}}, z: 1 }, b: 2 }, { a: { y: {q: {x: {r: 3}}}, z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: {q: {x: {r: 4}}}, z: 1 }, b: {f: {p: {l: {m:{d: 99}}}}} }, { a: { y: {q: {x: {r: 4}}}, z: 1 }, b: {f: {p: {l: {m:{d: 99}}}}} }), true);
assertEqual(eqObjects({ a: 5, z: 1, b: {f: {p: {l: {m:{d: 98}}}}} }, { a: 5, z: 1, b: {f: {p: {l: {m:{d: 99}}}}} }), false);

// old tests:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);