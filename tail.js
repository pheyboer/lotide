const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tailWords = tail(words);


assertEqual(tailWords.length, 2);
assertEqual(tailWords.length, 3);
assertEqual(tailWords.length, 4);
assertEqual(tailWords[0], "Lighthouse");
assertEqual(tailWords[1], "Labs");
