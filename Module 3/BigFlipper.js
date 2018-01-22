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

Syvc rirel puhax bs a punenpgref va n fgevat, jurer a vf nal cbfvgvir vagrtre terngre guna 1.

Abgr gung guvf vf vagragvbanyyl irel fvzvyne gb gur cerivbhf ceboyrz.

Cyrnfr sbphf ba trggvat n jbexvat fbyhgvba jvgu gur gbbyf lbh xabj jryy.

Cenpgvpr gur vagrenpgvir/pbyynobengvir vagreivrj fglyr gung'f qrfpevorq va gur qbphzragngvba.

Rknzcyr:
ine vachg = 'n fubeg rknzcyr'; 
ine bhgchg = syvcRirelAPunef(vachg, 5);
pbafbyr.ybt(bhgchg); // --> buf nkr geryczn

Oernxvat guvf rknzcyr qbja cvrpr ol cvrpr:
'n fub' -> 'buf n'
'eg rk' -> 'kr ge'
'nzcyr' -> 'ryczn'

-> 'buf nkr geryczn'
*/

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example'; 
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function checkEvenNumber(num) {
    return num % 2 === 0;
}

function flipper(input) {
    var inputLength = input.length;
    if(inputLength === 0 || inputLength === 1) {
        return input;
    }
    var stringA = "";
    var stringB = "";
    var stringResult = "";
    for(var i = 0; i < input.length; i++) {
        if(checkEvenNumber(i)) {
            stringB += input.charAt(i);
        } else {
            stringA += input.charAt(i);
        }
    }
    for(var j = 0; j < stringB.length; j++) {
        if(!stringA[j]) {
            stringResult += stringB[j];
        } else {
            stringResult += stringA[j] + stringB[j];
        }
    }
    return stringResult;
}

function flipEveryNChars(input, n) {
    var inputLength = input.length;
    if(n <= 0 || inputLength === 0 || inputLength === 1) {
        return input;
    }
    if(n == 2) {
        return flipper(input);
    }
    var resArr = [];
    for(var i = 0; i < inputLength; i+=n) {
        var arr = [];
        for(var j = i; j < n + i; j++) {
            arr.push(input.charAt(j));
        }
        resArr.push(arr.reverse().join(""));
    }    
    return resArr.join("");
}

function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log("Test passed");
  } else {
    console.log("Test [" + testName + "] failed. Expected " + '"' + expected + '"' + ", But got " + '"' + actual + '"')
  }
}

var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
assertEquals(output, "ohs axe trelpma", "Flip every chunk of 5")