const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');

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
  return result;
};

module.exports = countOnly;

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