/*
Options.js
 The program is background script for the options page. It runs the functions of the options page
 Author: Mareks Zeile
 Collaborator(s):
 Collaboration:
 Date: 5/12/22
 On My Honor, I confirm that I followed all collaboration policy guidelines, and that the work I am submitting is my own: MZ
*/

/*
This is code to set a chrome storage value
*/
console.log('in options');

var myTicker = "myTicker"
function add(){
    chrome.storage.sync.set({[myTicker]:'NFLX'}, function() {
      console.log('Value is set to ' + myTicker);
    });
}



