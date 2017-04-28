//this file isn't transpiled so it must use CommonJs and ES5

//register babel to transpile before our tests run
require('babel-register')();

//disable webpack features that mocha doesnt understand
require.extensions['.css'] = function(){};
