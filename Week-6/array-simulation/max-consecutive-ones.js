// ==========================================
// MAXIMUM CONSECUTIVE ONES
// ==========================================
// Problem: Find the maximum number of consecutive 1's in a binary array.
// Example: [1,1,0,1,1,1] → 3
//
// Approach: Track current streak of 1's and max streak seen.
// Time: O(n)
// Space: O(1)

function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
