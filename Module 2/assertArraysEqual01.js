/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

function checkArrays(actual, expected)  {
  if(actual.length !== expected.length) {
    return false;
  } else {
    for(var i = 0; i < actual.length; i++) {
      if(actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
}

// Your assertion function:
function assertArraysEqual(actual, expected, testName) {
  var checkArrays = checkArrays(actual, expected);
  if(checkArrays) {
    console.log("Passed.");
  } else {
    console.log("Test Failed...");
  }
}

// Your code under test:
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray = newArray + callbackFunction(element);
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}


// Your calls to 'assertArraysEqual':
assertArraysEqual(map([1, 2, 3], cube), [1, 8, 27], 'should successfully map an array');
