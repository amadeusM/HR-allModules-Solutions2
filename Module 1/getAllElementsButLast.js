/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
*/

function getAllElementsButLast(array) {
  var allButLast = [];
  for(var i = 0; i < array.length; i++) {
    if(i !== array.length - 1) {
      allButLast.push(array[i]);
    } else {
      continue;
    }
  }
  return allButLast;
}

