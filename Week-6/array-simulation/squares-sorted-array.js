// ==========================================
// SQUARES OF A SORTED ARRAY
// ==========================================
// Problem: Given a SORTED array (may have negatives), return squares in non-decreasing order.
// Example: [-4, -1, 0, 3, 10] → [0, 1, 9, 16, 100]
//
// Naive approach: Square each, then sort → O(n log n)
// Optimal approach: Two pointers from both ends!
//
// WHY TWO POINTERS WORK:
// The array is already sorted. The LARGEST square must be at one of the ENDS
// (either the most negative number or the largest positive number).
// So we compare both ends, take the bigger square, and move inward.
//
// Time: O(n) - each element visited once
// Space: O(n) - for the result array

function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  const result = new Array(nums.length);
  let pos = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
