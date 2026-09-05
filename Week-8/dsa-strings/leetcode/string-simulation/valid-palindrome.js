// ==========================================
// VALID PALINDROME
// ==========================================
// Problem: Check if a string is a palindrome, ignoring non-alphanumeric characters and case.
// Example: "A man, a plan, a canal: Panama" → true
// Example: "race a car" → false
//
// Approach: Two pointers, skip non-alphanumeric, compare lowercase.
// Time: O(n)
// Space: O(1)

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric from left
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }
    // Skip non-alphanumeric from right
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }
    // Compare (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
