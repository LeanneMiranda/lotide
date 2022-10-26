const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(numOfLetters) {
  let string = {};
  for (let letter of numOfLetters) {
    if (letter in string) {
      string[letter] += 1;
    } else {
      string[letter] = 1;
    }
  }
  return string;
};

console.log(countLetters("hello world"));
console.log(countLetters("lighthouse in the house"));