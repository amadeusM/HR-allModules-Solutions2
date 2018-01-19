/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
*/

function getAllElementsButFirst(array) {
  var allButFirst = [];
  for(var i = 0; i < array.length; i++) {
    if(i !== 0) {
      allButFirst.push(array[i]);
    } else {
      continue;
    }
  }
  return allButFirst;
}

