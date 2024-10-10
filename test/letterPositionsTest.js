const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe('#letterPositions', () => {
  it("should return correct indices for each letter in a string", () => {
    const result = letterPositions("hello");
    assert.deepEqual(result['h'], [0]);
    assert.deepEqual(result['e'], [1]);
    assert.deepEqual(result['l'], [2, 3]);
    assert.deepEqual(result['o'], [4]);
  });
});