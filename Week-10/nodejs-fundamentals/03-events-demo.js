// ==========================================
// EVENTS MODULE DEMO
// ==========================================
// Node.js has a built-in EventEmitter class for handling events

const EventEmitter = require('events');

console.log('=== EVENTS MODULE DEMO ===\n');

// ==========================================
// 1. BASIC EVENT EMITTER
// ==========================================
console.log('--- Basic Event Emitter ---');

const myEmitter = new EventEmitter();

// Register event listeners
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}! Nice to see you.`);
});

// Emit the event
myEmitter.emit('greet', 'Alice');
console.log(); // Multiple listeners can handle the same event

// ==========================================
// 2. EVENT WITH MULTIPLE ARGUMENTS
// ==========================================
console.log('--- Event with Multiple Arguments ---');

myEmitter.on('order', (orderId, product, quantity) => {
    console.log(`Order #${orderId}: ${quantity}x ${product}`);
});

myEmitter.emit('order', 12345, 'Laptop', 2);
console.log();

// ==========================================
// 3. ONCE LISTENER (Fires only once)
// ==========================================
console.log('--- Once Listener ---');

myEmitter.once('startup', () => {
    console.log('Application started (this will only print once)');
});

myEmitter.emit('startup');
myEmitter.emit('startup'); // This won't trigger the listener
console.log();

// ==========================================
// 4. CUSTOM EVENT EMITTER CLASS
// ==========================================
console.log('--- Custom Event Emitter Class ---');

class OrderSystem extends EventEmitter {
    placeOrder(order) {
        console.log(`Placing order: ${order.id} - ${order.product}`);
        this.emit('orderPlaced', order);
    }
    
    completeOrder(orderId) {
        console.log(`Completing order: ${orderId}`);
        this.emit('orderCompleted', orderId);
    }
}

const orderSystem = new OrderSystem();

// Listen to events
orderSystem.on('orderPlaced', (order) => {
    console.log(`  → Notification: New order ${order.id} received!`);
});

orderSystem.on('orderCompleted', (orderId) => {
    console.log(`  → Notification: Order ${orderId} has been shipped!`);
});

// Use the system
orderSystem.placeOrder({ id: 'ORD-001', product: 'Phone' });
orderSystem.placeOrder({ id: 'ORD-002', product: 'Tablet' });
orderSystem.completeOrder('ORD-001');
console.log();

// ==========================================
// 5. ERROR HANDLING
// ==========================================
console.log('--- Error Handling ---');

myEmitter.on('error', (err) => {
    console.log('Error caught:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong!'));

console.log('\n=== KEY CONCEPTS ===');
console.log('1. EventEmitter is the backbone of Node.js async patterns');
console.log('2. on() registers listeners, emit() triggers events');
console.log('3. Multiple listeners can handle the same event');
console.log('4. once() registers a listener that fires only once');
console.log('5. Always handle "error" events to prevent crashes');
