WEBPACK=./node_modules/.bin/webpack

build:
	$(WEBPACK)
	NODE_ENV=production $(WEBPACK)
