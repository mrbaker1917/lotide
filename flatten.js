
const flatten = arr => {
  let flatArray = [];
  const flatter = function(arg) {
    if (!Array.isArray(arg)) {
      flatArray.push(arg);
    } else {
      for (let a of arg) {
        flatter(a);
      }
    }
  };
  arr.forEach(flatter);
  return flatArray;
};

module.exports = flatten;

console.log(flatten([1, [[2]], [3, 4]]));