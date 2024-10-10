//objective: implement function findKey which takes in an object and a callback
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, callback) => { 
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};
//Function loops through keys of object to find key defined by callback function

//use example in compass and use assertEqual to define new variable testingFindKey and make catagorey for each result
const testingFindKey = () => {
  const result1 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2 //test for 2 stars
  );
  assertEqual(result1, "noma");

  const result2 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 5
  );
  assertEqual(result2, undefined); //undefined test

  //test for match with 3 stars

  const result3 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3
  );
  assertEqual(result3, "Akaleri");

  const result4 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 1
  );
  assertEqual(result4, "Blue Hill"); //test for 1 star


  assertEqual(findKey({}, (x) => x.stars === 1), undefined); //empty object test
};


testingFindKey();