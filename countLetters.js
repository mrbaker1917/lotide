const countLetters = st => {
  let result = {};
  for (let c of st) {
    if (c !== " ") {
      if (result[c]) {
        result[c] += 1;
      } else {
        result[c] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;