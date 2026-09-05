// ==========================================
// REVERSE STRING
// ==========================================
// Problem: Reverse a string in-place (modify the array directly).
// Example: ["h","e","l","l","o"] → ["o","l","l","e","h"]
//
// Approach: Two pointers from both ends, swap and move inward.
// Time: O(n) - each element visited once
// Space: O(1) - in-place, no extra array

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

const arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
console.log(arr); // ["o", "l", "l", "e", "h"]
