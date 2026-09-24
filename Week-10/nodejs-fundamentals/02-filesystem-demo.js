// ==========================================
// FILE SYSTEM (fs) MODULE DEMO
// ==========================================
// The fs module lets you read, write, delete, and manipulate files

const fs = require('fs');
const path = require('path');

console.log('=== FILE SYSTEM DEMO ===\n');

// Create a 'files' directory if it doesn't exist
const filesDir = path.join(__dirname, 'files');
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
    console.log('Created files directory\n');
}

// ==========================================
// 1. SYNCHRONOUS FILE OPERATIONS (Blocking)
// ==========================================
console.log('--- Synchronous Operations ---');

// Write file synchronously
const syncFilePath = path.join(filesDir, 'sync-test.txt');
fs.writeFileSync(syncFilePath, 'Hello from synchronous write!');
console.log('Written file synchronously');

// Read file synchronously
const syncContent = fs.readFileSync(syncFilePath, 'utf-8');
console.log('Read file:', syncContent);

// Append to file synchronously
fs.appendFileSync(syncFilePath, '\nThis line was appended.');
console.log('Appended to file\n');

// ==========================================
// 2. ASYNCHRONOUS FILE OPERATIONS (Non-blocking)
// ==========================================
console.log('--- Asynchronous Operations ---');

const asyncFilePath = path.join(filesDir, 'async-test.txt');

// Write file asynchronously (callback-based)
fs.writeFile(asyncFilePath, 'Hello from async write!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Written file asynchronously');
    
    // Read file asynchronously
    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Read file:', data);
        
        // Delete file asynchronously
        fs.unlink(asyncFilePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return;
            }
            console.log('Deleted file\n');
            
            console.log('=== KEY CONCEPTS ===');
            console.log('1. Synchronous methods block the event loop (avoid in production)');
            console.log('2. Asynchronous methods are non-blocking (preferred)');
            console.log('3. Always handle errors in async operations');
            console.log('4. Use utf-8 encoding to read/write strings');
        });
    });
});

// ==========================================
// 3. PROMISE-BASED OPERATIONS (Modern approach)
// ==========================================
console.log('\n--- Promise-based Operations ---');

const fsPromises = require('fs').promises;

async function promiseDemo() {
    try {
        const promiseFilePath = path.join(filesDir, 'promise-test.txt');
        
        // Write
        await fsPromises.writeFile(promiseFilePath, 'Hello from promises!');
        console.log('Written file with promises');
        
        // Read
        const content = await fsPromises.readFile(promiseFilePath, 'utf-8');
        console.log('Read file:', content);
        
        // Append
        await fsPromises.appendFile(promiseFilePath, '\nAppended with promises.');
        console.log('Appended to file');
        
        // Read again
        const updatedContent = await fsPromises.readFile(promiseFilePath, 'utf-8');
        console.log('Updated content:', updatedContent);
        
        // Delete
        await fsPromises.unlink(promiseFilePath);
        console.log('Deleted file');
        
    } catch (err) {
        console.error('Error:', err);
    }
}

promiseDemo();
