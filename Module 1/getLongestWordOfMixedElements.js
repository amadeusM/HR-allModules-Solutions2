/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestElement(arr) {
  var longest = '';
  if (arr.length > 0) {
    longest = arr[0];
    arr.forEach(function (each){
        if (each.length > longest.length) longest = each;
    });
  }
  return longest;
}

function getLongestWordOfMixedElements(arr) {
  if(arr.length === 0) {
    return '';
  }
  var newArr = [];
  for(var el in arr){
    if(typeof arr[el] === 'string') {
      newArr.push(arr[el]);
    }
  }
  return getLongestElement(newArr);
}

