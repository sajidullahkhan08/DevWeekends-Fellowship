// ==========================================
// TOPIC 4: ES MODULES (ESM) vs COMMONJS (CJS)
// ==========================================

/*
 * MODULES allow us to split our code into separate files and share logic.
 * There are two main systems in JavaScript:
 *
 * 1. CommonJS (CJS) - The Node.js standard (Older)
 * 2. ES Modules (ESM) - The official JavaScript standard (Modern)
 *
 * ----------------------------------------------------------------------
 * COMMONJS (Used in Node.js by default)
 * ----------------------------------------------------------------------
 * // math.js
 * function add(a, b) { return a + b; }
 * module.exports = { add }; // Exports at runtime
 *
 * // index.js
 * const math = require('./math'); // Imports synchronously at runtime
 * console.log(math.add(2, 3));
 *
 * ----------------------------------------------------------------------
 * ES MODULES (Used in modern browsers and modern Node.js)
 * ----------------------------------------------------------------------
 * // math.js
 * export function add(a, b) { return a + b; } // Exports statically
 *
 * // index.js
 * import { add } from './math.js'; // Imports statically before code runs
 * console.log(add(2, 3));
 *
 * ----------------------------------------------------------------------
 * KEY DIFFERENCES (Crucial for Mentor Meeting):
 * ----------------------------------------------------------------------
 * 1. SYNTAX: CJS uses require/module.exports. ESM uses import/export.
 * 2. LOADING: CJS is synchronous (loads one by one). ESM is asynchronous
 *    (loads in parallel, better for browsers).
 * 3. TIMING: CJS resolves at RUNTIME. ESM resolves at COMPILE TIME
 *    (Static analysis). This means ESM can catch missing imports before
 *    the code even runs!
 * 4. THIS CONTEXT: In CJS, 'this' at the top level refers to module.exports.
 *    In ESM, 'this' at the top level is undefined.
 */

console.log("Read the comments above to understand Modules!");
