// ==========================================
// MISSING NUMBER
// ==========================================
// Problem: Given array of n distinct numbers in [0, n], find the missing one.
// Example: [3, 0, 1] -> 2 (n = 3, range [0, 3])
//
// Approach 1 (Hashmap): Put all numbers in a set, check 0 to n.
// Approach 2 (Math): Sum of 0..n = n*(n+1)/2, subtract actual sum.
//
// Time: O(n)
// Space: O(1) with math approach

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));     // 2
console.log(missingNumber([0, 1]));         // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
