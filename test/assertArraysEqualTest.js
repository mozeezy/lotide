const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([4, 5, 6], [4, 5, 6]);
assertArraysEqual([4, 5, 6], [4, 5, '6']);