# Node.js Event Loop Explained

## What is the Event Loop?
The event loop is what allows Node.js to perform **non-blocking I/O operations** 
despite JavaScript being single-threaded. It offloads operations to the system 
kernel whenever possible.

## The 6 Phases of the Event Loop

```
   ┌───────────────────────────┐
┌─>│           timers          │  ← setTimeout(), setInterval()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │  ← I/O callbacks deferred to next loop
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │  ← (internal use only)
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │  ← Retrieve new I/O events; execute I/O callbacks
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │  ← setImmediate() callbacks
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──│      close callbacks      │  ← socket.on('close', ...)
   └───────────────────────────┘
```

## Phase Breakdown

### 1. Timers Phase
- Executes callbacks scheduled by `setTimeout()` and `setInterval()`
- Example:
  ```javascript
  setTimeout(() => console.log('timeout'), 0);
  ```

### 2. Pending Callbacks Phase
- Executes I/O callbacks deferred to the next loop iteration
- Handles callbacks that were pending during the previous cycle

### 3. Poll Phase
- **The most important phase**
- Retrieves new I/O events
- Executes I/O callbacks (fs.readFile, http requests, etc.)
- If no callbacks are pending, it will wait here for new events

### 4. Check Phase
- Executes `setImmediate()` callbacks
- Runs right after the poll phase

### 5. Close Callbacks Phase
- Handles close events (e.g., `socket.on('close')`)

## Microtasks (Run between phases)

### Process.nextTick Queue
- Runs **before** any other microtasks
- Highest priority
  ```javascript
  process.nextTick(() => console.log('nextTick'));
  ```

### Promise Queue
- Handles resolved/rejected promises
- Runs after nextTick queue
  ```javascript
  Promise.resolve().then(() => console.log('promise'));
  ```

## Execution Order Example

```javascript
console.log('1. Start');

setTimeout(() => console.log('2. Timeout'), 0);

setImmediate(() => console.log('3. Immediate'));

Promise.resolve().then(() => console.log('4. Promise'));

process.nextTick(() => console.log('5. Next Tick'));

console.log('6. End');
```

**Output:**
```
1. Start
6. End
5. Next Tick      ← Microtask (nextTick queue)
4. Promise        ← Microtask (promise queue)
2. Timeout        ← Timer phase
3. Immediate      ← Check phase
```

## Why This Matters

### Synchronous Code (Blocking)
```javascript
const data = fs.readFileSync('file.txt'); // Blocks everything!
console.log(data);
```
- The entire server stops while reading the file
- No other requests can be handled

### Asynchronous Code (Non-blocking)
```javascript
fs.readFile('file.txt', (err, data) => {
    console.log(data);
});
console.log('Still running!');
```
- The file read is offloaded to the system
- The event loop continues processing other requests
- When the file is ready, the callback is queued

## Key Takeaways

1. **Node.js is single-threaded** but uses the event loop for concurrency
2. **I/O operations are non-blocking** - they don't stop the event loop
3. **Callbacks are queued** and executed in phases
4. **Microtasks (nextTick, promises) run before timers**
5. **Never block the event loop** with synchronous operations in production
6. **Use async/await or callbacks** for I/O operations

## Common Gotchas

### Blocking the Event Loop
```javascript
// BAD: CPU-intensive task blocks everything
function heavyComputation() {
    for (let i = 0; i < 1000000000; i++) {
        // This blocks the event loop!
    }
}

// GOOD: Offload to worker threads or break into chunks
```

### setTimeout(fn, 0) Doesn't Run Immediately
```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');

// Output: Start, End, Timeout
// setTimeout is queued in the timers phase, not executed immediately
```

### Source of Notes
- Gemini 3 Pro
- ChatGPT
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/