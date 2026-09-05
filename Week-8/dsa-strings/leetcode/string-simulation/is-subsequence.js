// ==========================================
// IS SUBSEQUENCE
// ==========================================
// Problem: Check if s is a subsequence of t.
// A subsequence maintains the order but doesn't need to be contiguous.
// Example: s = "abc", t = "ahbgdc" → true
// Example: s = "axc", t = "ahbgdc" → false
//
// Naive approach: Nested loops checking all positions → O(n²)
// Optimal approach: Two pointers, one for each string → O(n)
//
// THE IDEA:
// Use pointer i for s and pointer j for t.
// Move j through t. When t[j] matches s[i], advance i.
// If i reaches the end of s, all characters were found in order.
//
// Time: O(n) where n = t.length
// Space: O(1)

function isSubsequence(s, t) {
  let i = 0; // Pointer for s
  let j = 0; // Pointer for t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // Found a match, move to next character in s
    }
    j++; // Always move through t
  }

  // If we've gone through all of s, it's a subsequence
  return i === s.length;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
