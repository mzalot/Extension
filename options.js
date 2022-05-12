console.log('in options');

var myTicker = "myTicker"
function add(){
    chrome.storage.sync.set({[myTicker]:'NFLX'}, function() {
      console.log('Value is set to ' + myTicker);
    });
}



