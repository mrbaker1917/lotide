const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const f = String.fromCodePoint(0x1F92C);
  const p = String.fromCodePoint(0x1F603);
  if (eqArrays(arr1, arr2)) {
    console.log(`${p}${p}${p} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${f}${f}${f} Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

let output = letterPositions("hello");
let correctAnswer = { h: [0], e: [1], l: [2, 3], o: [4] };
for (let l in output) {
  assertArraysEqual(output[l], correctAnswer[l]);
}

output = letterPositions("abab bcbc ddfgf");
correctAnswer = {a: [0, 2], b: [1, 3, 5, 7], c: [6, 8], d: [10, 11], f: [12, 14], g: [13]};
for (let l in output) {
  assertArraysEqual(output[l], correctAnswer[l]);
}
