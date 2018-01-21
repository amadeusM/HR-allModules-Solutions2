/*

Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/


// Your assertion function:
function assertObjectsEqual(actual, expected, testName) {
  if ( JSON.stringify(actual) === JSON.stringify(expected) ) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '], expected "' + JSON.stringify(expected) + '", but got "' + JSON.stringify(actual) + '"')
  }
}

// Your code under test:
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}


// Your calls to 'assertObjectsEqual':
var object = {
  firstName: "Ahmed",
  lastName: "ElSheikh"
};

var object1 = {
  firstName: "Ahmed",
  lastName: "ElSheikh",
  fullName: "Ahmed ElSheikh"
};

assertObjectsEqual(addFullNameProp(object), object1, "Full name");