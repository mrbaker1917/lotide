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