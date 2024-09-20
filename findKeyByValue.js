const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue({ one: "uno", two: "dos", three: "tres" }, "tres"));
console.log(findKeyByValue({}, "anything"));




// Implement the function findKeyByValue which takes in an object and a value. 
// It should scan the object and return 
// the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.
//use object.keys
//use for...of to loop over the keys returned by Object.kesy

