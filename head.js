const assertEqual = require('./assertEqual.js');

const head = (arr) => arr[0];

assertEqual(head([5,3,7,8]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 8);
assertEqual(head([]), undefined);