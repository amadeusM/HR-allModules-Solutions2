/*
Ok by now you know the drill on how to set up and do these videos.

Give yourself 20 minutes for this problem.  

Don't be too fancy. Just lay out your plan and get it done.

Note: Don't submit code that doesn't reflect what you did in the allotted time.  You can put a belatedly-complete solution in a *private* Github Gist instead and link to that if you really want to share it here.

Starter Code :
/*
Problem description (de-obfuscate with ROT-13 as usual).
There's an extra hint in there, too, if you need it!

Focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Vf bar fgevat n ebgngrq irefvba bs nabgure?

Sbe rknzcyr:
Fgevat 1: 'uryyb jbeyq'
Fgevat 2: 'beyquryyb j'

Rkgen uvag: (qr-boshfpngr jvgu EBG-20, gurer'f n qebcqbja ba uggc://ebg13.pbz gb fryrpg gung)
By rhn whnuex max lmkbgz, rhn'ee ux mh mkbobteer ybgw tghmaxk lmkbgz bglbwx bm nlbgz kxznetk Lmkbgz fxmahwl.

Whnuexw lmkbgz: 'axeeh phkewaxeeh phkew'
Lxtkva p/bg bm: '       hkewaxeeh p    '
*/
/*
function isRotated(str1, str2) {
}
*/

// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (de-obfuscate with ROT-20, there's a dropdown on http://rot13.com to select that)
// If you double the string, you'll be to trivially find another string inside it using regular String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '
// */
// /*
// function isRotated(str1, str2) {
// }

function isRotated(str1, str2) {
    var tempStr = str1;
    tempStr = tempStr.repeat(2);
    return tempStr.search(str2) !== -1;
}

function assertTrue(actual, testName) {
  if(actual) {
       console.log("Test [" + testName + "] passed.");
    } else {
      console.log("FAILED ["+ testName +"] Expected " + '"True"' + ", but got " + '"' + actual + '"' );
  }
}

var str1 = 'hello world';
var str2 = 'orldhello w';
assertTrue(isRotated(str1, str2), "To pass the test");

var str1 = 'hello world';
var str2 = 'orldheldsao w';
assertTrue(!isRotated(str1, str2), "Failing the test");