console.log('in options');
var myTicker = "NFLX"
chrome.storage.sync.set({[myTicker]: myTicker}, function() {
  console.log('Value is set to ' + myTicker);
});


