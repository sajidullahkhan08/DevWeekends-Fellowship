# When Frequency Counting Beats Sorting

## The Short Answer

**Frequency counting is O(n) while sorting is O(n log n).**
For large inputs, O(n) is significantly faster.

## When to Use Frequency Counting

Use frequency counting when you need to:

1. **Check if two strings have the same characters** (Valid Anagram)
2. **Count occurrences** of characters or words
3. **Find duplicates** or missing characters
4. **Compare character distributions** without caring about order

## Example: Valid Anagram

**Problem:** Are "anagram" and "nagaram" anagrams?

### Approach 1: Sorting (O(n log n))

```javascript
function isAnagramSort(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
```

1. Sort both strings → O(n log n)
2. Compare → O(n)
3. Total: O(n log n)

### Approach 2: Frequency Counting (O(n))

```javascript
function isAnagramFreq(s, t) {
  if (s.length !== t.length) return false;
  const freq = {};
  for (const char of s) freq[char] = (freq[char] || 0) + 1;
  for (const char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}
```

1. Count frequencies → O(n)
2. Check frequencies → O(n)
3. Total: O(n)

## Why Frequency Counting Wins

1. Faster: O(n) vs O(n log n). For n = 1,000,000:

   i. O(n) = 1,000,000 operations

   ii. O(n log n) = ~20,000,000 operations (20x slower!)

2. No need to modify input: Sorting requires rearranging the string
3. Works for non-comparable data: Frequency counting works even when you can't sort

## When Sorting is Still Okay

1. Small inputs (n < 100)
2. When you need the sorted result anyway
3. When the sorting algorithm is highly optimized (like built-in sort)

## The Takeaway

**_If the problem is about "same characters, possibly different order" → use frequency counting._**

**_If the problem is about "sorted order" → use sorting._**
