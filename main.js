var hello = "hello"
chrome.storage.sync.set({[hello]: hello}, function() {
  console.log('Value is set to ' + hello);
});

chrome.storage.sync.get([hello], function(result) {
  console.log('Value currently is ' + result.hello);
});
