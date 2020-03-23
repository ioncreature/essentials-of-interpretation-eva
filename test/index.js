const assert = require('assert');
const Eva = require('../src/eva');
const eva = new Eva();

assert(eva.eval(1), 1);
assert(eva.eval('"hello world"'), 'hello world');
assert(eva.eval(['+', 1, 3]), 4);
assert(eva.eval(['+', ['+', 2, 3], 5]), 10);

console.log('All assertions passed');