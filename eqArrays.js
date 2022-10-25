// assertEqual is supposed to compare 2 values (actual & expected) and if they match then give back a pretty msg and if they don't, a bad msg
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false