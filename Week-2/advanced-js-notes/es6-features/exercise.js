// ==========================================
// TOPIC 2: ES6+ FEATURES
// ==========================================

const user = { id: 1, name: "Alice", address: { city: "New York" } };
const numbers = [1, 2, 3];

// 1. DESTRUCTURING (Extracting values cleanly)
// Old way: const name = user.name; const city = user.address.city;
const {
  name,
  address: { city },
} = user;
console.log(name, city); // Alice, New York

// Array destructuring
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3]

// 2. SPREAD vs REST (The ... operator)
// SPREAD: Expands an array/object into individual elements.
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
const updatedUser = { ...user, age: 25 }; // Creates a shallow copy and adds 'age'

// REST: Gathers multiple elements into an array. Used in function parameters.
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 3. OPTIONAL CHAINING (?.)
// Prevents errors when accessing deep nested properties that might not exist.
// Old way: const zip = user.address && user.address.zipCode;
const zip = user.address?.zipCode;
console.log(zip); // undefined (No error thrown!)

// 4. NULLISH COALESCING (??)
// Returns the right side ONLY if the left side is null or undefined.
// Unlike || (OR), it doesn't treat 0 or "" as falsy.
const port = 0 ?? 3000;
console.log(port); // 0 (If we used ||, it would have returned 3000)
