BABEL=./node_modules/.bin/babel

js = clipboard-tool.es5.js

all: node_modules $(js) $(spec)

node_modules:
	npm install

%.es5.js:: %.js
	$(BABEL) -o $@ $<

.PHONY: all