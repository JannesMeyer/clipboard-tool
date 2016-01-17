# clipboard-tool

[![Build Status](https://travis-ci.org/JannesMeyer/clipboard-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/clipboard-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool.svg)](https://david-dm.org/JannesMeyer/clipboard-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/clipboard-tool#info=devDependencies)

Installation:

	npm install clipboard-tool --save

## Example

~~~js
var Clipboard = require('clipboard-tool');

// Write the string 'Hello' to the system's clipboard
Clipboard.write('Hello');
~~~

This package needs `document.execCommand('copy')` to work and has no effect otherwise.

If you are creating a Chrome or Opera extension, be sure to include the `clipboardWrite` permission in your manifest.


## Contributing

Download source and compile:

	git clone git@github.com:[USERNAME]/chrome-tool.git
	make

Watch for changes and recompile:

	make watch

Run tests:

	npm test
