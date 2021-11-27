// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const eqArrays = function(arr1, arr2) {
//   let correct = true;

  
//   if (arr1.length !== arr2.length) {
//     return false
//   } 

//   for (let i = 0; i < arr1.length; i ++) {
//     if (arr1[i] !== arr2[i]) {
//       correct = false;
//     }
//   }

//   return correct;

// }
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays (arr1, arr2)) {
//     console.log (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log (`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// };

// assertArraysEqual([4, 5, 6], [4, 5, 6]);
// assertArraysEqual([4, 5, 6], [4, 5, '6']);

const assertArraysEqual = require('./assertArraysEqual');

// middle function
// make a function that returns the middle element in the array
// if the array is less than or equal to 2, return an empty array.
// if the array is greater than 2 and % 2 === 0, return the 2 elements in the middle.
// else return the 1 element in the middle

const middle = function (arr) {
  //  returning an empty array if the array has 2 elements or less
  if (arr.length <= 2) {
    return [];
    // if the elements of the array is even (%2 === 0). Math.ceil rounds a number up to the next largest integer.
    // return the two middle numbers ['halfway thru the array -1', 'halfway thru the array'].
  } else if (arr.length % 2 === 0) {
    return [arr [Math.ceil (arr.length/2) -1], arr [Math.ceil (arr.length/2)]];
    // else return the middle number if the array is NOT even.
  } else {
    return [arr[Math.floor (arr.length/2)]];
  }
};

// ---- TEST ----

// since the assertArraysEqual function takes 2 inputs
// input 1 is the middle function, input 2 is a random array.
// the output of input 1 is compared to input 2.

assertArraysEqual(middle([1]), [1, 2, 3]); 
assertArraysEqual(middle ([1]), [2, 1, 3]);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);

module.exports = middle;

