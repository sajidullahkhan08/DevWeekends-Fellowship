# Big O Notation - My Notes

## What is Big O?

Big O describes the **worst case** of how an algorithm's time or space grows
as the input size (n) gets bigger. We don't measure in seconds.
We measure in "number of operations."

## The Golden Rules

1. **Drop constants:** O(2n) → O(n). We don't care about the "2".
2. **Drop non-dominant terms:** O(n² + n) → O(n²). The biggest term wins.
3. **Different inputs = different variables:** If we loop through array A
   then array B, it's O(a + b), NOT O(n).
4. **Nested loops multiply:** Loop inside a loop = O(n × n) = O(n²).

## The 5 Complexities I Must Know

### O(1) - Constant

No matter how big the input, it takes the same time.

```js
// Example: Accessing an array element by index
const arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // Always instant, even if array has 1 million items
```

### O(log n) - Logarithmic

We cut the problem in HALF every step. Super fast.

```js
// Example: Binary Search
// Array of 1,000,000 items → only ~20 steps to find the answer!
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

### O(n) - Linear

We look at each item once. Input doubles → time doubles.

```js
// Example: Finding the maximum in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // One loop through all n items
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### O(n log n) - Linearithmic

Usually means we divide AND do linear work at each level.

```js
// Example: Merge Sort / built-in Array.sort()
// We split the array in half (log n levels), and merge takes O(n) at each level
const sorted = [5, 3, 8, 1, 2].sort((a, b) => a - b);
```

### O(n²) - Quadratic

Nested loops. Input doubles → time QUADRUPLES. Slow!

```js
// Example: Check all pairs in an array
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // n iterations
    for (let j = 0; j < arr.length; j++) {
      // n iterations EACH time
      console.log(arr[i], arr[j]);
    }
  }
}
// Total operations: n × n = n²
```

## Space Complexity

Same idea, but for MEMORY instead of time.

1. O(1): We use a fixed number of variables (no extra arrays/objects)
2. O(n): We create a new array/object that grows with input
