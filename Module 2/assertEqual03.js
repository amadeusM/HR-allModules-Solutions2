/*
Use the skeleton provided to write a working implementation.

Notes: 
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

*/

// Skeleton
function average(numbers) {
  var res = sum(numbers);
  return res/numbers.length;
}

function sum(numbers) {
  var result = 0;
  for(var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function assertEqual(expected, actual, testName) {
  if(actual === expected) {
    console.log(testName + " Passed.");
  } else {
    console.log(testName + " Failed.");
  }
}

assertEqual(average([1, 1, 1]) , 1, "Get average of an array elements");