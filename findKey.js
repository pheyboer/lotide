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

//eqArrays and assertArraysEqual functions previously made

const findKey = (obj, callback) => { //defined function findKey that loops through keys of object with use of arrow function
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};
//use example in compass and use assertArraysEqual to define new variable testingFindKey and make catagorey for each result
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
  assertArraysEqual([result1], ["noma"]); //wrap result in an array

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
  assertArraysEqual([result2], [undefined]); //undefined test

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
  assertArraysEqual([result3], ["Akaleri"]);

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
  assertArraysEqual([result4], ["Blue Hill"]); //test for 1 star


  assertArraysEqual([findKey({}, (x) => x.stars === 1)], [undefined]); //empty object test
};


testingFindKey();



//objective: implement function findKey which takes in an object and a callback
//it should scan the object and return the first key for which the callback returns a truthy value.
//if no key found return undefined
//core logic is from findKeyByValue