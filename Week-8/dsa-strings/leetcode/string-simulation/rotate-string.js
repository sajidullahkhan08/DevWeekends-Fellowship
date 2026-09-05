// ==========================================
// ROTATE STRING
// ==========================================
// Problem: Check if s can become goal after some number of shifts (rotations).
// Example: s = "abcde", goal = "cdeab" → true
// Example: s = "abcde", goal = "abced" → false
//
// Approach: If goal is a rotation of s, then goal must be a substring of s+s.
// Example: s = "abcde", s+s = "abcdeabcde"
//          goal = "cdeab" is a substring of "abcdeabcde" → true
//
// Time: O(n) for string concatenation and substring search
// Space: O(n) for the concatenated string

function rotateString(s, goal) {
  // Lengths must match
  if (s.length !== goal.length) return false;

  // Check if goal is a substring of s+s
  return (s + s).includes(goal);
}

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
