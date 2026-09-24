// ==========================================
// MATH UTILITIES MODULE
// ==========================================
// This module exports multiple functions

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function square(n) {
    return n * n;
}

// Export individual functions
module.exports = {
    add,
    multiply,
    square
};

// Alternative ways to export:
// module.exports.add = add;
// module.exports.multiply = multiply;
// module.exports.square = square;

// Or export a single thing:
// module.exports = add; // Then import as: const add = require('./math-utils');
