// ==========================================
// RUNNING SUM OF 1D ARRAY
// ==========================================
// Problem: Given array nums, return array where each element = sum of all previous elements.
// Example: [1, 2, 3, 4] → [1, 3, 6, 10]
//
// Approach: Keep a running total. For each element, add it to the total and store.
// Time: O(n) - single pass through array
// Space: O(n) - for the result array (or O(1) if we modify in place)

function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
