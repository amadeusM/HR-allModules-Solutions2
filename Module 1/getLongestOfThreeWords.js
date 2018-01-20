/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  if(word1.length >= word2.length && word1.length >= word3.length) {
    return word1;
  }
  if(word2.length >= word1.length && word2.length >= word3.length) {
    return word2;
  }
  return word3;
}

