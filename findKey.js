const assertEqual = require('./assertEqual.js');

const findKey = (object, callback) => {
  for (let k in object) {
    if (callback(object[k])) {
      return k;
    }
  }
};

module.exports = findKey;

// const movies = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 5 }
// };

// const nums = {1: "one", 2: "two", 3: "three", 4: "four"};

// assertEqual(findKey(movies, x => x.stars === 4), undefined);
// assertEqual(findKey(movies, x => x.stars === 3), "Akaleri");
// assertEqual(findKey(movies, x => x.stars > 3), "Akelarre");
// assertEqual(findKey(nums, x => x.length > 3), '3');