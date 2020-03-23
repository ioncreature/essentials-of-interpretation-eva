'use strict';

const {isNumber, isString} = require('./utils');

class Eva {
    eval(input) {
        if (isNumber(input))
            return input;

        if (isString(input))
            return input.slice(1, -1);

        throw 'Not Implemented';
    }
}

module.exports = Eva;
