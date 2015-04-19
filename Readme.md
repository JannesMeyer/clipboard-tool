# clipboard-tool

[![Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool.svg)](https://david-dm.org/JannesMeyer/clipboard-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/clipboard-tool#info=devDependencies)

Install the package by executing

	npm install clipboard-tool

in a terminal.

~~~js
var Clipboard = require('clipboard-tool');

// Write the string 'Hello' to the system's clipboard
Clipboard.write('Hello');
~~~

This library needs `document.execCommand('copy')` to work and has no effect otherwise.

If you are creating a Chrome or Opera extension, be sure to include the `clipboardWrite` permission in your manifest.