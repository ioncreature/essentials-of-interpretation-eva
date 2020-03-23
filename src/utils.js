'use strict';

exports.isString = value => {
    return typeof value === 'string' && value.length > 2 && value[0] === '"' && value[value.length - 1] === '"';
};

exports.isNumber = value => {
    return typeof value === 'number';
};