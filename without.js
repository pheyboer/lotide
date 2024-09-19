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
  
  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  };
  
  
const without = function(source, itemsToRemove) {
  let resultArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      resultArray.push(item);
    }
  }
  return resultArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(words);

console.log(without([], [1]));
console.log(without([1, 2, 3], []));
console.log(without([1, 2, 3], [1, 2, 3]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

