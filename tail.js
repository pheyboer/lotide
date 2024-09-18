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

assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");

assertEqual(tailWords.length, 2);
assertEqual(tailWords[0], "Lighthouse");
assertEqual(tailWords[1], "Labs");

const singleElementArray = ["Only One"];
const singleTail = tail(singleElementArray);
assertEqual(singleElementArray.length, 1);
assertEqual(singleTail.length, 0);

const emptyArray = [];
const emptyTail = tail(emptyArray);
assertEqual(emptyArray.length, 0);
assertEqual(emptyTail.length, 0);