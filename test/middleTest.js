const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual([1, 2, 3], [1, 3, 3]);
console.log(middle([1, 2, 4]));