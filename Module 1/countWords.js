/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  if(str.length === 0) {
      return {};
  } 
  var words = str.split(" ");
  var countWords = {};
  for(var i = 0; i < words.length; i++) {
    var count = 0; 
    var toCheck = words[i];
    for(var j = 0; j < words.length; j++) {
      if(toCheck === words[j]) {
        count++;
      }
    }
    countWords[toCheck] = count;
  }
  return countWords;
}

