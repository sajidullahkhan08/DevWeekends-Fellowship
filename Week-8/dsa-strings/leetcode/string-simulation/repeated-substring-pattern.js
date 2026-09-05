// ==========================================
// REPEATED SUBSTRING PATTERN
// ==========================================
// Problem: Check if a string can be constructed by repeating a substring.
// Example: "abab" → true (substring "ab" repeated)
// Example: "aba" → false
// Example: "abcabcabcabc" → true (substring "abc" repeated 4 times)
//
// Approach: Try all possible substring lengths from 1 to n/2.
// Time: O(n²) in worst case
// Space: O(n) for string concatenation

function repeatedSubstringPattern(s) {
  const n = s.length;

  // Try all possible substring lengths
  for (let len = 1; len <= n / 2; len++) {
    // Length must divide n evenly
    if (n % len === 0) {
      const substring = s.substring(0, len);
      const repeated = substring.repeat(n / len);
      if (repeated === s) {
        return true;
      }
    }
  }
  return false;
}

console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("abcabcabcabc")); // true
