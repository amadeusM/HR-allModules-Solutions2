/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

function filterEvenLengthWords(words) {
  var arr = [];  
  if((typeof words !== "undefined") && Array.isArray(words) && words.length > 0) {
    for(var elem in words) {
      if(words[elem].length % 2 === 0) {
        arr.push(words[elem]);
      }
    }
  }
  return arr;
}

