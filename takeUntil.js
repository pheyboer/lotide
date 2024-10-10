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


const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      break; //this will STOP if the callback returns a truthy value
    }
    result.push(item);
  }
  return result;
};
//Function creates new array and collects elements until callback is satified

//test cases using data1 results 1 examples

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results1, [1, 2, 5]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "been"]);