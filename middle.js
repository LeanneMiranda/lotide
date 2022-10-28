const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  if(array.length <= 1) {
    return [];
  } else if(array.length % 2 == 0) {
    let index = array.length / 2;
    return [array[index - 1], array[index]];
  } else if(array.length % 2 != 0) {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;



