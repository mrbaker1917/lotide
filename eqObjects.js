const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k in object1) {
    if (Array.isArray(object1[k])) {
      return eqArrays(object1[k], object2[k]);
    } else if (typeof object1[k] === 'object') {
      if (!eqObjects(object1[k], object2[k])) {
        return false;
      }
    } else {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;