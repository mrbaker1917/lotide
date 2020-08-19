const assertEqual = function(actual, expected) {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (actual === expected) {
    console.log(`${p}${p}${p} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (let k in obj) {
    if (obj[k] === val) {
      return k;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestMovies = {
  sciFi: "Europa Report",
  comedy: "Brazil",
  warDrama: "Stalingrad",
  farce: "Death of Stalin",
  political: "Wag the Dog"
};

assertEqual(findKeyByValue(bestMovies, "Stalingrad"), "warDrama");
assertEqual(findKeyByValue(bestMovies, "Brazil"), "comedy");
assertEqual(findKeyByValue(bestMovies, "1917"), undefined);
