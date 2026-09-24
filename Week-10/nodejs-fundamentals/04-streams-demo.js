// ==========================================
// STREAMS MODULE DEMO
// ==========================================
// Streams process data chunk by chunk (memory efficient for large files)

const fs = require('fs');
const path = require('path');

console.log('=== STREAMS DEMO ===\n');

// Create a large test file
const largeFilePath = path.join(__dirname, 'files', 'large-file.txt');
const writeStream = fs.createWriteStream(largeFilePath);

console.log('Creating large file...');
for (let i = 0; i < 10000; i++) {
    writeStream.write(`This is line ${i + 1} of the large file.\n`);
}
writeStream.end();

writeStream.on('finish', () => {
    console.log('Large file created\n');
    
    // ==========================================
    // 1. READABLE STREAM (Reading chunk by chunk)
    // ==========================================
    console.log('--- Readable Stream ---');
    
    const readStream = fs.createReadStream(largeFilePath, { encoding: 'utf-8' });
    let lineCount = 0;
    let chunkCount = 0;
    
    readStream.on('data', (chunk) => {
        chunkCount++;
        const lines = chunk.split('\n').length - 1; // -1 because last chunk may not end with \n
        lineCount += lines;
        console.log(`Chunk ${chunkCount}: ${chunk.length} bytes, ~${lines} lines`);
    });
    
    readStream.on('end', () => {
        console.log(`\nFinished reading! Total chunks: ${chunkCount}, Total lines: ~${lineCount}\n`);
        
        // ==========================================
        // 2. WRITABLE STREAM (Writing chunk by chunk)
        // ==========================================
        console.log('--- Writable Stream ---');
        
        const copyPath = path.join(__dirname, 'files', 'large-file-copy.txt');
        const readStream2 = fs.createReadStream(largeFilePath);
        const writeStream2 = fs.createWriteStream(copyPath);
        
        readStream2.pipe(writeStream2); // Pipe data from read to write
        
        writeStream2.on('finish', () => {
            console.log('File copied using streams!\n');
            
            // ==========================================
            // 3. TRANSFORM STREAM (Modifying data on the fly)
            // ==========================================
            console.log('--- Transform Stream (Uppercase) ---');
            
            const { Transform } = require('stream');
            
            const uppercaseTransform = new Transform({
                transform(chunk, encoding, callback) {
                    this.push(chunk.toString().toUpperCase());
                    callback();
                }
            });
            
            const upperPath = path.join(__dirname, 'files', 'large-file-upper.txt');
            const readStream3 = fs.createReadStream(largeFilePath, { encoding: 'utf-8' });
            const writeStream3 = fs.createWriteStream(upperPath);
            
            readStream3
                .pipe(uppercaseTransform)
                .pipe(writeStream3);
            
            writeStream3.on('finish', () => {
                console.log('File transformed to uppercase!\n');
                
                console.log('=== KEY CONCEPTS ===');
                console.log('1. Streams process data chunk by chunk (memory efficient)');
                console.log('2. Readable streams: createReadStream()');
                console.log('3. Writable streams: createWriteStream()');
                console.log('4. pipe() connects streams together');
                console.log('5. Transform streams modify data on the fly');
                console.log('6. Perfect for large files or real-time data');
            });
        });
    });
});
