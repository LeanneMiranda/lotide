const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  assertEqual(eqArrays(arr1, arr2), true); // => true
};
const without = function(source, itemsToRemove) {
  const itemsToKeep = [];

  for (const item of source) {
    let keepThis = true;

    for (const itemToRemove of itemsToRemove) {
      if (item === itemToRemove) {
        keepThis = false;
        break;
      }
    }
    if (keepThis) {
      itemsToKeep.push(item);
    }
  }
  return itemsToKeep;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "1"]);