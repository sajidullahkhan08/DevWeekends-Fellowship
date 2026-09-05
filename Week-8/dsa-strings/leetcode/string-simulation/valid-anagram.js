// ==========================================
// VALID ANAGRAM
// ==========================================
// Problem: Given two strings s and t, return true if t is an anagram of s.
// An anagram has the same characters with the same frequencies.
// Example: s = "anagram", t = "nagaram" → true
// Example: s = "rat", t = "car" → false
//
// Approach 1 (Sorting): Sort both strings and compare → O(n log n)
// Approach 2 (Frequency Count): Count character frequencies → O(n)
//
// WHY FREQUENCY COUNT IS BETTER:
// Sorting takes O(n log n) time. Frequency counting takes O(n) time.
// For large strings, O(n) is significantly faster than O(n log n).
//
// Time: O(n) - single pass through both strings
// Space: O(1) - at most 26 lowercase letters (constant space)

function isAnagram(s, t) {
  // If lengths differ, they can't be anagrams
  if (s.length !== t.length) return false;

  // Count frequencies of characters in s
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Subtract frequencies using t
  for (const char of t) {
    if (!freq[char]) {
      return false; // Character not found or count is 0
    }
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
