# Extension
stock extension
Manifest.json: This file tells the chrome extension how to function and gives it permissions. Over time I have added storage permisions and a sandbox page.
Options.html: This file created an options page for the extension which I tried to use with chrome storage to save user options for stock choices. I ended up taking out the code for it since it did not work.
Options.js: This file was the script for the options page which originally had code to get the form data from the options page and set chrome storage, but it did not work. So I then made it just setting one value.
Sandbox.html: This file is the sandbox page I created to try and allow a search box for stocks, but it did not work.
Popup.html: This file is the heart of the code. It is the code for the popup itself, which is what you see when you open the extension. It is where I added all the text, pictures, links, buttons, and script sources.
Bundle.js: This file runs the API. It uses the buttons at the bottom of the extension to run an instance of the API.
Main.js: This file is a test script which I used to test how chrome storage works.
