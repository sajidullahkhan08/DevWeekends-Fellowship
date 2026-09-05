// ==========================================
// REVERSE VOWELS OF A STRING
// ==========================================
// Problem: Reverse only the vowels in a string.
// Example: s = "hello" → "holle"
// Example: s = "leetcode" → "leotcede"
//
// Approach: Two pointers, swap vowels when both point to vowels.
// Time: O(n) - single pass
// Space: O(n) - strings are immutable in JS, need to convert to array

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    // Move left pointer to next vowel
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    // Move right pointer to previous vowel
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    // Swap vowels
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  return chars.join("");
}

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
