/*
Write an "assertObjectsEqual" function from scratch.

Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

It is OK to use JSON.stringify().

Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Examples

SUCCESS CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Blow'
};

assertObjectsEqual(person, expected, 'updates person's existing first name field');
// console output:
// passed

FAILURE CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'age', 35);

var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}

*/

function assertObjectsEqual(actual, expected, testName) {
  if(JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + "] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
  }
}




