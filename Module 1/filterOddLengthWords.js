/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

function filterOddLengthWords(words) {
  var arr = [];
  if((typeof words !== "undefined") && Array.isArray(words) && words.length > 0) {
    for(var el in words) {
      if(words[el].length % 2 !== 0) {
        arr.push(words[el]);
      }
    }
  }
  return arr;

}

