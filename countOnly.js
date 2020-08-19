const assertEqual = function(actual, expected) {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name] === true) {
      result[name] = undefined;
    }
  }
  for (const item of allItems) {
    if (Object.prototype.hasOwnProperty.call(result, item) && result[item] !== undefined) {
      result[item] += 1;
    } else if (Object.prototype.hasOwnProperty.call(result, item) && result[item] === undefined) {
      result[item] = 1;
    }
  }
  console.log(result);
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Jasper": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Jasper"], undefined);
assertEqual(result1["Fang"], 2);