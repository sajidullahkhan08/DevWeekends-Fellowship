# JavaScript Key Containers for DSA

## 1. Array (like vector in C++ / list in Python)

**What it does:** Stores ordered items. Access by index.

**When to use:** When order matters, or you need index-based access.

```js
const arr = [10, 20, 30];
arr.push(40); // Add to end → O(1)
arr.pop(); // Remove from end → O(1)
arr.shift(); // Remove from start → O(n) ⚠️ slow!
arr.includes(20); // Check if exists → O(n)
arr.sort((a, b) => a - b); // Sort → O(n log n)
```

## 2. Object / Map (like map in C++ / dict in Python)

**What it does:** Stores key-value pairs. Super fast lookup by key

**When to use:** Counting frequencies, caching, "have I seen this before?"

```js
// Plain Object
const freq = {};
freq["apple"] = 3;
freq["banana"] = 1;
console.log(freq["apple"]); // O(1) lookup!

// Map (better for DSA - keys can be anything, maintains insertion order)
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");
myMap.has("name"); // true → O(1)
myMap.get("name"); // "Alice" → O(1)
myMap.delete(1); // O(1)
```

## 3. Set (like set in C++ / set in Python)

**What it does:** Stores UNIQUE values only. No duplicates allowed.

**When to use:** "Does this item exist?" checks, removing duplicates.

```js
const mySet = new Set([1, 2, 3, 3, 3]);
console.log(mySet); // {1, 2, 3} - duplicates removed!

mySet.add(4); // O(1)
mySet.has(3); // true → O(1) ⚡ (vs array.includes which is O(n))
mySet.delete(2); // O(1)
mySet.size; // 3
```

## When to Use What? (Quick Decision Guide)

Need ordered list, access by index -> Array

Count occurrences / key-value lookup -> Map or Object

Check existence / remove duplicates -> Set

Need sorted unique values -> Array + sort, or maintain manually

## Built-in Methods I Should NOT Reinvent

```js
arr.sort();

(arr.map(), arr.filter(), arr.reduce());

(Math.max(...arr), Math.min(...arr));

(str.split(), str.includes(), str.indexOf());
```
