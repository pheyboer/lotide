const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
// Test that the function correctly returns the first element of a string array
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

});


//do not need assertEqual because we are using the assert object for assertions
//refactored for mocha