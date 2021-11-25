// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];


// function map (() => {

// }) {

//}
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
                        // function (word) {return word[0]}
console.log(results1);

map(['I love', 'coding', 'it is', 'kinda', 'fun'], word => word[0])

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
    return false
  } 

  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      correct = false;
    }
  }

  return correct;

}
assertEqual(eqArrays(map(['I love', 'coding', 'it is', 'kinda', 'fun'], word => word[0]), ['I', 'c', 'i', 'k', 'f']), true);
assertEqual(eqArrays(map(['I love', 'coding', 'it is', 'kinda', 'fun'], word => word[0]), ['I', 'c', 'I', 'k', 'f']), true);
assertEqual(eqArrays(map(['I love', 'coding', 'it is', 'kinda', 'fun'], word => word[0]), ['I', 'c', 'I', 'k', 'f']), false);

// assertEqual(parameter 1, parameter 2)
// parameter 1 = eqArrays (parameter 3, parameter 4) // parameter 2 = true
// parameter 3 = map(parameter 5, callback) // parameter 4 = arr2

assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays (arr1, arr2)) {
    console.log (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log (`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

assertArraysEqual([4, 5, 6], [4, 5, 6]);
assertArraysEqual([4, 5, 6], [4, 5, '6']);


