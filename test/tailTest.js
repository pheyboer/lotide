const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it("should return the right length after removing first element", () => {
    assert.strictEqual(tail(words).length, 2); // checks that length of array returned is 2. first element removed
  });

  it("should return 'Lighthouse' as the first element", () => {
    assert.strictEqual(tail(words)[0], "Lighthouse"); //return first element lighthouse check which should be first element in array
  });

  it("should return 'Labs' as second element", () => {
    assert.strictEqual(tail(words)[1], "Labs");//return second element labs check. labs should be second element
  });

  const singleElementArray = ["Only One"]; //set up a variable with one element to test. tail function will return empty array

  it("should return empty array when given single element array", () => {
    assert.strictEqual(singleElementArray. length, 1);
    assert.strictEqual(tail(singleElementArray).length, 0);
  });

  const emptyArray = []; // set up an empty array to test for empty array. returns empty no elements to remove

  it("should return empty array when given empty array", () => {
    assert.strictEqual(emptyArray.length, 0);
    assert.strictEqual(tail(emptyArray).length, 0);
  });
});
//removed intermediate variables
//refactored with mocha using describe it blocks above
//test with multiple elements