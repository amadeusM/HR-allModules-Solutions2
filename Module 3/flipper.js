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


3) *** DO THE PROBLEM IN A STRUCTURED WAY ***

Follow the instructions from the sidebar titled "How to Run Your Interview".
Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway!


4) Review your own work and record your notes here

Watch your video and observe what you did well and what you want to improve for next time.
Write those notes here in this Repl.it problem.



*** NO STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***



Starter Code :
*/
/*
Problem description (see instructions for how to de-obfuscate).


Syvc rirel cnve bs punenpgref va n fgevat.


Rknzcyr:
ine vachg = 'purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!';
ine bhgchg = syvcCnvef(vachg);
pbafbyr.ybt(bhgchg); // --> uppr xhb gbu javrgregfav tugfvc beyozrv ,fv 'g favnfralyv gaerfrvgta!
*/

// Flip every pair of characters in a string.
// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(input) {
    var inputLength = input.length;
    if(inputLength === 0 || inputLength === 1) {
        return input;
    } 
    var evenString = "";
    var oddString = "";
    var answerString = "";
    for(var i = 0; i < inputLength; i++) {
        if(i % 2 === 0) {
           evenString += input[i];
        } else {
            oddString += input[i];
        }
    }
    for(var j = 0; j < evenString.length; j++) {
        if(!oddString[j]) {
            answerString += evenString[j];
        } else {
            answerString += oddString[j] + evenString[j];
        }
    }
    return answerString;
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
      console.log('passed [' + testName + ']');
    } else {
        console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"');
    }
}


// Was not able to solve it in 20 mins....

var input = "check out how interesting this problem is, it\'s insanely interesting!";
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEqual(flipPairs(input), expected, "Flip the characters (pairs)")


  