const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = sentence => {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (Object.prototype.hasOwnProperty.call(result, letter)) {
        result[letter].push(i);
      } else {
        result[letter] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;

// let output = letterPositions("hello");
// let correctAnswer = { h: [0], e: [1], l: [2, 3], o: [4] };
// for (let l in output) {
//   assertArraysEqual(output[l], correctAnswer[l]);
// }

// output = letterPositions("abab bcbc ddfgf");
// correctAnswer = {a: [0, 2], b: [1, 3, 5, 7], c: [6, 8], d: [10, 11], f: [12, 14], g: [13]};
// for (let l in output) {
//   assertArraysEqual(output[l], correctAnswer[l]);
// }
