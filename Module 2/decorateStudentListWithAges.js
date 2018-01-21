/*
Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example:
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

Hint: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function objectify(arrElem, key, age) {
  var obj = {};
  obj["name"] = arrElem;
  obj[key] = age;
  return obj;
}

function decorateClassListWithAges(classList) {
  var arr = [];
  for(var i = 0; i < classList.length; i++) {
    var randomIntInclusive = getRandomIntInclusive(10, 11);
    arr.push(objectify(classList[i], "age", randomIntInclusive));
  }
  return arr;
}

function assertEqual(expected, actual, testName) {
  if(expected === actual) {
    console.log("Test Name: ["+ testName +"] Test Status: [Test passed]");
  } else {
    console.log("Test Name: ["+ testName +"] Test Status: [Test failed]");
  }
}

function assertWithinRange(low, high, actual, testName) {
  var inRange = low <= actual && actual <= high;
  if (inRange) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

assertEqual(Array.isArray(decorateClassListWithAges(classList)), true, "returns an array");

output.forEach(function(student) {
  assertWithinRange(10, 11, student.age, 'renders all ages either 10 or 11');
});