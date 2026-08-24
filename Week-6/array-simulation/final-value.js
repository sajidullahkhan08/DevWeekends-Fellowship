// ==========================================
// FINAL VALUE OF VARIABLE AFTER OPERATIONS
// ==========================================
// Problem: Given operations like "++X", "X++", "--X", "X--", find final value of X (starts at 0).
// Example: ["--X","x++","X++"] → -1 + 0 + 1 = 0
//
// Approach: If operation contains '+', add 1. Otherwise subtract 1.
// Time: O(n) - single pass
// Space: O(1) - one variable

function finalValueAfterOperations(operations) {
  let x = 0;
  for (const op of operations) {
    if (op.includes("+")) x++;
    else x--;
  }
  return x;
}

console.log(finalValueAfterOperations(["--X", "x++", "X++"])); // 0
