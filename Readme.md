# clipboard-tool

[![Build Status](https://travis-ci.org/JannesMeyer/clipboard-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/clipboard-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool.svg)](https://david-dm.org/JannesMeyer/clipboard-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/clipboard-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/clipboard-tool#info=devDependencies)

[![npm](https://nodei.co/npm/clipboard-tool.png?compact=true)](https://www.npmjs.com/package/clipboard-tool)

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

	git clone git@github.com:[USERNAME]/clipboard-tool.git
	yarn prepublish

Watch for changes and recompile:

	yarn start