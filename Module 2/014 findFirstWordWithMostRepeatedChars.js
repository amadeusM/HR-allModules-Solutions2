/*
Flesh out the implementation and test it.

Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

===
*Some notes about the skeleton*

When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don't pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

*/

// returns maximum value of an array
function getMax(arr){
  return Math.max.apply(0, arr);
}

// Break up individual words into individual letters.
// Count the instances of each letter
// Iterate all the counts and find the highest
// Return this word's max repeat count
function findMaxRepeatCountInWord(word) {
  var chars = word.split("");
  var arr = [];
  var count = 0;
  for(var j = 0; j < chars.length; j++) {
    var char = chars[j];
    for(var i = 0; i < word.length; i++) {
      if(char === word.charAt(i)) {
        count++;
      }
    }
    
    arr.push(count);
  }
  return getMax(arr);
}

// Function findFirstWordWithMostRepeatedChars
// Break up input text into words (space-delimited).
  // For each word...
    // If that max repeat count is higher than the overall max repeat count, then
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount
function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  var words = text.split(" ");
  for(var i = 0; i < words.length; i++) {
      var word = words[i];
      var repeatCountForWord = findMaxRepeatCountInWord(word)
      if(repeatCountForWord > maxRepeatCountOverall){
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word;
      }
  }  
  return wordWithMaxRepeatCount;
}


function assertEqual(expected, actual, testName) {
  if(expected === actual) {
    console.log("Test Name: ["+ testName +"] Test Status: [Test passed]");
  } else {
    console.log("Test Name: ["+ testName +"] Test Status: [Test failed]");
  }
}

assertEqual("assssaa",  findFirstWordWithMostRepeatedChars("There is an assssaa fox"), "find First Word With Most Repeated Characters")
