// ==========================================
// MERGE STRINGS ALTERNATELY
// ==========================================
// Problem: Merge two strings by adding letters in alternating order.
// If one string is longer, append the additional letters at the end.
// Example: word1 = "abc", word2 = "pqr" → "apbqcr"
// Example: word1 = "ab", word2 = "pqrs" → "apbqrs"
//
// Approach: Use two pointers, one for each string.
// Time: O(n + m) where n, m are lengths of the strings
// Space: O(n + m) for the result

function mergeAlternately(word1, word2) {
  let result = "";
  let i = 0,
    j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }
  return result;
}

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
