// ==========================================
// LEETCODE #1: TWO SUM
// ==========================================
// Problem: Given array 'nums' and 'target', return indices of two numbers
// that add up to target.
//
// Example: nums = [2, 7, 11, 15], target = 9
// Answer: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9

// --- BRUTE FORCE APPROACH (O(n²) time, O(1) space) ---
// Check every possible pair. Simple but slow.
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// --- OPTIMAL APPROACH (O(n) time, O(n) space) ---
// Use a Map to remember numbers we've already seen.
// For each number, ask: "Have I seen (target - this number) before?"
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

// Test it
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
