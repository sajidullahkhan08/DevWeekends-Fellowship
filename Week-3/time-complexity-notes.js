// ==========================================
// TIME COMPLEXITY & BIG O NOTATION NOTES
// ==========================================

/*
 * WHAT IS TIME COMPLEXITY?
 * It's a way to describe how the runtime of an algorithm grows as the
 * size of the input (usually called 'n') grows.
 * We use "Big O" notation to express this. We don't measure in seconds;
 * we measure in "number of operations".
 */

// ==========================================
// 1. O(1) - CONSTANT TIME
// ==========================================
// The time it takes DOES NOT change, no matter how big the input is.
// Example: Accessing an array element by its index.
const myArray = [10, 20, 30, 40, 50];
console.log(myArray[2]); // Instantly gets 30. Even if the array had 1 million items, it takes the exact same time.

// ==========================================
// 2. O(log n) - LOGARITHMIC TIME
// ==========================================
// The time grows slowly. Every step, we cut the problem in half.
// Example: Binary Search.
// If we have 1,000,000 items, it takes at most ~20 steps to find the answer!
// (Because 2^20 is roughly 1,000,000). This is extremely fast and efficient.

// ==========================================
// 3. O(n) - LINEAR TIME
// ==========================================
// The time grows exactly in proportion to the input.
// If the input doubles, the time doubles.
// Example: A simple loop that checks every item.
function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // We might have to check every single item
    if (arr[i] === target) return true;
  }
  return false;
}

// ==========================================
// 4. O(n^2) - QUADRATIC TIME
// ==========================================
// The time grows exponentially with the input.
// If the input doubles, the time quadruples! This is slow for large datasets.
// Example: Nested loops (like Bubble Sort and Selection Sort).
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Outer loop (n)
    for (let j = 0; j < arr.length; j++) {
      // Inner loop (n)
      console.log(arr[i], arr[j]); // Total operations: n * n = n^2
    }
  }
}

/*
 * SUMMARY:
 * O(1)    -> Instant (Array lookup)
 * O(log n)-> Super Fast (Binary Search)
 * O(n)    -> Okay (Simple Loop / Linear Search)
 * O(n^2)  -> Slow (Nested Loops / Bubble Sort)
 */
