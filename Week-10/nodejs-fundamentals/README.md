# Week 10: Node.js Fundamentals

A comprehensive exploration of Node.js core concepts, built without any frameworks.

## What This Project Covers

1. **CommonJS Modules** - `require()` and `module.exports`
2. **File System (fs)** - Synchronous, asynchronous, and promise-based file operations
3. **Events Module** - EventEmitter and custom event-driven architecture
4. **Streams** - Readable, writable, and transform streams for efficient data processing
5. **HTTP Server** - Building a REST API from scratch using the `http` module
6. **Event Loop** - Understanding Node.js's non-blocking architecture

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Demos
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

## API Endpoints

Once the server is running at `http://localhost:3000`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | HTML home page |
| GET | `/api/info` | Server information (JSON) |
| GET | `/api/files` | List all files (JSON) |
| GET | `/api/files/:filename` | Read a specific file (JSON) |
| POST | `/api/files` | Create a new file (JSON body) |

### Example: Create a File
```bash
curl -X POST http://localhost:3000/api/files \
  -H "Content-Type: application/json" \
  -d '{"filename":"hello.txt","content":"Hello World!"}'
```

## Project Structure

```
Week-10/
├── 01-modules-demo.js       # CommonJS modules
├── 02-filesystem-demo.js    # fs module operations
├── 03-events-demo.js        # EventEmitter
├── 04-streams-demo.js       # Streams and pipe()
├── server.js                # HTTP server (main deliverable)
├── event-loop-notes.md      # Event loop documentation
├── modules/
│   ├── math-utils.js
│   └── string-utils.js
└── files/                   # Created by demos
```

## Key Concepts Learned

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

## Resources

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Node.js Event Loop Guide](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Understanding Node.js](https://nodejs.org/en/docs/guides/)
