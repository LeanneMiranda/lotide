const assertEqual = require('./assertEqual');

// eqArrays takes in 2 parameters (or arguments)
const eqArrays = function(arr1, arr2) {
  // compare the 2 arguments to see if they are the same length, if they don't match, then return false
  if (arr1.length !== arr2.length) {
    return false;
  }
    // use a for loop to iterate through each array 1 at a time to compare if the value is the same in both arrays, if not the same, return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // if we didn't trigger any of our if statements, then we would return true
  return true;
};

module.exports = eqArrays;