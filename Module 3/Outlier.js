/*
Instructions from your teacher:
PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

1) Prepare to record & time

Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
Prepare an audible countdown timer (say, the Clock app on your phone).

2) Begin the problem

Go to http://www.rot13.com/ and de-obfuscate the problem statement.
Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
Start your timer for: 20 minutes / TWENTY MINUTES
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
*/

/*
Problem description (see instructions for how to de-obfuscate).

Tvira n fgevat bs rira naq bqq ahzoref, svaq juvpu vf gur fbyr rira ahzore be gur fbyr bqq ahzore.
  
Gur erghea inyhr fubhyq or 1-vaqrkrq, abg 0-vaqrkrq.

Rknzcyrf :
qrgrpgBhgyvreInyhr("2 4 7 8 10"); // => 3 - Guveq ahzore vf bqq, juvyr gur erfg bs gur ahzoref ner rira
qrgrpgBhgyvreInyhr("1 10 1 1");  //=> 2 - Frpbaq ahzore vf rira, juvyr gur erfg bs gur ahzoref ner bqq
*/


// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd


function checkEven(num) {
    return num % 2 === 0;
}

// assuming if the first number of the array is even 
// then we are searching for the sole odd
// and vice versa
function detectOutlierValue(input) {
    var arrNums = input.split(" ");
    var count = 1;
    var even = [];
    var odd = [];
    for(var i = 0; i < arrNums.length; i++) {
        if(checkEven(arrNums[0])) {
          even.push(checkEven(arrNums[i]));
        } else {
          odd.push(!checkEven(arrNums[i]));
        }
    }        
    if(checkEven(arrNums[0])) {
        for(var j = 0; j < even.length; j++) {
            if(!even[j]) {
                return count;
            }
            count++;
        }
    } else {
        for(var j = 0; j < odd.length; j++) {
            if(!odd[j]) {
                return count;
            }
            count++;
        } 
    }
}


function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log("Test [" + testName + "] passed.");
  } else {
    console.log("Test [" + testName + "] failed. Expected " + '"' + expected + '"' + ", But got " + '"' + actual + '"')
  }
}


assertEquals(detectOutlierValue("2 4 7 8 10"), 3, "Get the sole odd value in the string");
assertEquals(detectOutlierValue("1 10 1 1"), 2, "Get the sole even value in the string");