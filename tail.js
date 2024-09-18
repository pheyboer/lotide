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
tail(words);

assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");
