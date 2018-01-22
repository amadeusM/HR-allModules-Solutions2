/*
Instructions from your teacher:
PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

1) Prepare to record & time

Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
Prepare a timer.

Note that you have a little more time on this one...

2) Begin the problem

Go to http://www.rot13.com/ and de-obfuscate the problem statement.
Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
Start your timer for: 25 minutes / TWENTY-FIVE MINUTES
Start recording.

3) Do the problem

Follow the instructions from the sidebar titled "How to Run Your Interview".

Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway! 

4) Finish but DO NOT upload

When you have a working solution that you are satisfied with OR when the timer goes off...
Stop recording.

5) Review your own work and record your notes here

Watch your video and observe what you did well and what you want to improve for next time.
Write those notes here.

*** DO NOT WAIT FOR STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***


Starter Code :

/*
Problem description (see instructions for how to de-obfuscate).

Lbh jvyy or tvira na neenl gung pbagnvaf gjb fgevatf. Lbhe wbo vf gb perngr n shapgvba gung jvyy gnxr gubfr gjb fgevatf naq genafcbfr gurz, fb gung gur fgevatf tb sebz gbc gb obggbz vafgrnq bs yrsg gb evtug.

r.t. genafcbfrGjbFgevatf(['Uryyb','Jbeyq']);

fubhyq erghea:
U J  
r b  
y e  
y y  
b q
*/

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

function transposeTwoStrings(arr) {
    var stringA = arr[0];
    var stringB = arr[1];
    var max = Math.max(stringA.length, stringB.length);
    var stringRes = "";
    for(var i = 0; i < max; i++) {
        if(stringA[i]) {
            stringRes += stringA[i] + " ";
        }
        if(stringB[i]) {
            stringRes += stringB[i] + " ";
        }
        stringRes += "\n";
    }
    return stringRes;
}

function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log("Test [" + testName + "] passed.");
  } else {
    console.log("Test [" + testName + "] failed. Expected " + '"' + expected + '"' + ", But got " + '"' + actual + '"')
  }
}

var input = ['Hello','World'];
var output = transposeTwoStrings(input);
console.log(output);