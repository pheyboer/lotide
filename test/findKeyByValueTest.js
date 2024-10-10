const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it("should return the right key for a given value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined for a value that does not exist", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
  
  it("should be able to handle an object with multiple key value pairs", () => {
    const result = findKeyByValue({ one: "uno", two: "dos", three: "tres" }, "tres");
    assert.equal(result, "three");
  });

  it("should return undefined for an empty object", () => {
    assert.equal(findKeyByValue({}, "anything"), undefined);
  });
});