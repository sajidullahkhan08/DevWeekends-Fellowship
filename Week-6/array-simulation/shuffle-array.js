// ==========================================
// SHUFFLE THE ARRAY
// ==========================================
// Problem: Given [x1,x2,...,xn, y1,y2,...,yn], return [x1,y1,x2,y2,...,xn,yn].
// Example: [2,5,1,3,4,7] with n=3 → [2,3,5,4,1,7]
//
// Approach: Use two pointers, one for x's (start) and one for y's (start at n).
// Time: O(n)
// Space: O(n) for result

function shuffle(nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2, 3, 5, 4, 1, 7]
