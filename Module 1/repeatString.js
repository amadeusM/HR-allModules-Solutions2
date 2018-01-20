/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  if(string.length === 0) {
      return '';
  }
  if(num === 0) {
    return '';
  } else {
    return string + repeatString(string, num - 1);
  }
}

