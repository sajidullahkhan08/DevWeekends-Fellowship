// ==========================================
// MOVE ZEROES
// ==========================================
// Problem: Move all 0's to the end, maintaining order of non-zero elements. In-place.
// Example: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
//
// Naive approach: Create new array, then copy back → uses O(n) extra space
// Optimal approach: Two pointers, in-place!
//
// THE IDEA:
// Use a "write pointer" that tracks where the next non-zero should go.
// First pass: move all non-zeros to the front.
// Second pass: fill the rest with zeros.
//
// Time: O(n) - two passes, but each element visited once
// Space: O(1) - in-place, no extra array

function moveZeroes(nums) {
  let writePointer = 0;

  // First pass: collect all non-zeros at the front
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  // Second pass: fill the rest with zeros
  while (writePointer < nums.length) {
    nums[writePointer] = 0;
    writePointer++;
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // [1, 3, 12, 0, 0]
