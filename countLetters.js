const assertEqual = require('./assertEqual');

const countLetters = st => {
  let result = {};
  for (let c of st) {
    if (c !== " ") {
      if (Object.prototype.hasOwnProperty.call(result, c)) {
        result[c] += 1;
      } else {
        result[c] = 1;
      }
    }
  }
  return result;
};

let output = countLetters("lighthouse in the house");

let answer = {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1};

for (let letter in output) {
  console.log(`How many of the letter "${letter}"?`);
  assertEqual(output[letter], answer[letter]);
}