// ==========================================
// COMMONJS MODULES DEMO
// ==========================================
// Node.js uses CommonJS by default (require/module.exports)
// This is different from ES Modules (import/export)

// Importing built-in modules
const path = require('path');
const os = require('os');

// Importing our custom modules
const mathUtils = require('./modules/math-utils');
const { greet, farewell } = require('./modules/string-utils');

console.log('=== COMMONJS MODULES DEMO ===\n');

// Using built-in modules
console.log('Current directory:', __dirname);
console.log('File name:', __filename);
console.log('Path join:', path.join(__dirname, 'files', 'test.txt'));
console.log('OS platform:', os.platform());
console.log('Total memory:', os.totalmem(), 'bytes\n');

// Using custom modules
console.log('Math utils:');
console.log('  add(5, 3):', mathUtils.add(5, 3));
console.log('  multiply(4, 7):', mathUtils.multiply(4, 7));
console.log('  square(6):', mathUtils.square(6));

console.log('\nString utils:');
console.log(' ', greet('Alice'));
console.log(' ', farewell('Bob'));

console.log('\n=== KEY CONCEPTS ===');
console.log('1. require() loads modules synchronously');
console.log('2. module.exports defines what a module exposes');
console.log('3. Each file is wrapped in a function (module scope)');
console.log('4. __dirname and __filename are available in every module');
