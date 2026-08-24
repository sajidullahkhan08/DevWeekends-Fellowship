// ==========================================
// NUMBER OF GOOD PAIRS
// ==========================================
// Problem: Count pairs (i, j) where i < j and nums[i] === nums[j].
// Example: [1, 2, 3, 1, 1, 3] → 4 pairs
//
// Approach 1 (Naive): Check all pairs → O(n²)
// Approach 2 (Smart): Count frequencies. If a number appears k times,
//                     it contributes k*(k-1)/2 pairs.
// Time: O(n)
// Space: O(n) for the frequency map

function numIdenticalPairs(nums) {
  const freq = {};
  let count = 0;

  for (const num of nums) {
    if (freq[num]) {
      count += freq[num];
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
