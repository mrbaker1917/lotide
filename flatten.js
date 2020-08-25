
const flatten = arr => {
  let flatArray = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let j of i) {
        flatArray.push(j);
      }
    } else {
      flatArray.push(i);
    }
  }
  return flatArray;
};

module.exports = flatten;