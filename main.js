/*
main.js
 The program is a test script I used to test chrome storage.
 Author: Mareks Zeile
 Collaborator(s):
 Collaboration:
 Date: 5/12/22
 On My Honor, I confirm that I followed all collaboration policy guidelines, and that the work I am submitting is my own: MZ
*/


/*
This code sets a test value to chrome storage and then gets the test value.
*/
var hello = "hello"
chrome.storage.sync.set({[hello]: hello}, function() {
  console.log('Value is set to ' + hello);
});

chrome.storage.sync.get([hello], function(result) {
  console.log('Value currently is ' + result.hello);
});
