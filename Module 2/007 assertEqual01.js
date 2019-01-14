/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function in a series of test cases to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

*/

// Assertion function:

function assertEqual(actual, expected, testName) {
  if(testName.length === 0) {
    console.log("Test name should not be empty.");
    return;
  }
  if(typeof actual === 'number' && typeof expected === 'number') {
    if(actual === expected) {
      console.log("passed");
    } else {
      console.log("Failed [" + testName + "] Expected " + expected + ", but got " + actual);
    }
  } else {
    console.log("Failed [" + testName + "] Expected parameters to be numbers.");
  }
}


// Code Under Test:

function square(n) {
  return n * n;
}

function squareMalfunction(n) {
  return n * n * n;
}

// Calls to 'assertEqual':
assertEqual(square(5), 25, "squaring Function Test"); // to pass
assertEqual(squareMalfunction(5), 25, "squaring Function Test"); // to fail
assertEqual(square(5), 25, ""); // to fail
assertEqual(square(5), "25", "squaring Function Test"); // to fail
