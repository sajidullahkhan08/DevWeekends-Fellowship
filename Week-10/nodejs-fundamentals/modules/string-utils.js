// ==========================================
// STRING UTILITIES MODULE
// ==========================================
// Demonstrates destructuring imports

function greet(name) {
    return `Hello, ${name}! Welcome to Node.js.`;
}

function farewell(name) {
    return `Goodbye, ${name}! See you soon.`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export using object shorthand
module.exports = {
    greet,
    farewell,
    capitalize
};
