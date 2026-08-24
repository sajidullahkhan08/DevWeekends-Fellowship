// ==========================================
// CONCATENATION OF ARRAY
// ==========================================
// Problem: Given array nums, return array of nums concatenated with itself.
// Example: [1, 2, 1] → [1, 2, 1, 1, 2, 1]
//
// Approach: Create result of size 2n, fill with nums[i] and nums[i+n].
// Time: O(n)
// Space: O(n) for result

function getConcatenation(nums) {
  const n = nums.length;
  const result = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    result[i] = nums[i];
    result[i + n] = nums[i];
  }
  return result;
}

console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
