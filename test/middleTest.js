const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), [1, 2, 3]); 
assertArraysEqual(middle([1]), [2, 1, 3]);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);