const findKey = (object, callback) => {
  for (let k in object) {
    if (callback(object[k])) {
      return k;
    }
  }
};

module.exports = findKey;