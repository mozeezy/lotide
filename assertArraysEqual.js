const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const eqArrays = function(arr1, arr2) {
  let correct = true;

  
  if (arr1.length !== arr2.length) {
    correct = false;
  } 

  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      correct = false;
    }
  }

  return correct;

}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal.`)
  } else {
    console.log(`🛑🛑🛑 Arrays are not equal.`)
  }

}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);