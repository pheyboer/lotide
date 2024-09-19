const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
if (array1.length !== array2.length) {
  return false;
}
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  }
}
return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);