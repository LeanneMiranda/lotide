const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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

assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual([1, 2, 3], [1, 3, 3]);
console.log(middle([1, 2, 4]));

