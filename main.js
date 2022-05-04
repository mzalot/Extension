chrome.storage.sync.set({hello: 'pog'}, function() {
  console.log('Value is set to ' + value);
});

chrome.storage.sync.get(['hello'], function(result) {
  console.log('Value currently is ' + result.key);
});
