# clipboard-tool

[![Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool.svg)](https://david-dm.org/JannesMeyer/clipboard-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/clipboard-tool#info=devDependencies)

Install the package by executing `npm install clipboard-tool` in a terminal.

~~~js
var Clipboard = require('clipboard-tool');

// Write the string 'Hello' to the system's clipboard. Only works in a browser.
// Has no effect when executed on the server.
Clipboard.write('Hello');
~~~
