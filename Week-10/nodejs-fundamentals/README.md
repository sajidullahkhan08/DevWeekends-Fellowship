# Week 10: Node.js Fundamentals

1. **CommonJS Modules** - `require()` and `module.exports`
2. **File System (fs)** - Synchronous, asynchronous, and promise-based file operations
3. **Events Module** - EventEmitter and custom event-driven architecture
4. **Streams** - Readable, writable, and transform streams for efficient data processing
5. **HTTP Server** - Building a REST API from scratch using the `http` module
6. **Event Loop** - Understanding Node.js's non-blocking architecture


### Installing Dependencies
```bash
npm install
```

### Running Demos
```bash
# Modules demo
npm run modules

# File system demo
npm run fs

# Events demo
npm run events

# Streams demo
npm run streams
```

### Start HTTP Server
```bash
npm start
# or with auto-reload
npm run dev
```

## Concepts Learned

### Event Loop
- Node.js is single-threaded but uses the event loop for concurrency
- I/O operations are non-blocking
- Callbacks are queued and executed in phases
- Never block the event loop with synchronous operations

### CommonJS vs ES Modules
- CommonJS: `require()` and `module.exports` (Node.js default)
- ES Modules: `import` and `export` (modern standard)
- This project uses CommonJS to understand Node.js fundamentals

### Streams
- Process data chunk by chunk (memory efficient)
- Perfect for large files or real-time data
- Use `pipe()` to connect streams

## What I Built

A complete HTTP server that:
- Handles GET and POST requests
- Reads and writes files using the fs module
- Returns JSON responses
- Demonstrates routing without Express
- Shows how frameworks like Express work under the hood

