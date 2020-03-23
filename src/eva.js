'use strict';

const {isNumber, isString} = require('./utils');

class Eva {
    eval(input) {
        if (isNumber(input))
            return input;

        if (isString(input))
            return input.slice(1, -1);

        if (Array.isArray(input)) {
            if (input[0] === '+') {
                return this.eval(input[1]) + this.eval(input[2]);
            }
        }

        throw 'Not Implemented';
    }
}

module.exports = Eva;
