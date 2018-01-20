/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if(i !== n){
      arr.push(array[i]);
    }
  }
  return arr;  
}

