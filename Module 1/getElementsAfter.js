/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/

function getElementsAfter(array, n) {
  var elementsAfterN = [];
  for(var i = 0; i < array.length; i++) {
    if(i > n) {
      elementsAfterN.push(array[i]);
    } else {
      continue;
    }
  }
  return elementsAfterN;
}

