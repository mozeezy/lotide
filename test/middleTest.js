// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1]), [1, 2, 3]); 
// assertArraysEqual(middle([1]), [2, 1, 3]);
// assertArraysEqual(middle([2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [1] for [2, 1, 3]", () => {
    assert.deepEqual(middle([2, 1, 3]), [1])
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
})