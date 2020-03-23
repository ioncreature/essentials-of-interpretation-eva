const assert = require('assert');
const Eva = require('../src/eva');
const eva = new Eva();

assert(eva.eval(1), 1);
assert(eva.eval('"hello world"'), 'hello world');

console.log('All assertions passed');