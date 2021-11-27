// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const assertEqual = require('./assertEqual');


// findKeyByValue function -- inputs are key and value.

const findKeyByValue = function (object, value) {
  // calling the object keys inside the 'object' and assigning it the variable 'keys'.
  const keys = Object.keys(object);
  // iterating 'keys' and storing that in the 'element' variable.
  for (let element of keys) {
    // if any iteration in the 'element' variable is equal to the value
    if (object[element] === value)
    // then return that element
    return element;
  }
};

// -------- TEST ---------

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy")
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
