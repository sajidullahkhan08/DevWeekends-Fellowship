// ==========================================
// NUMBER OF GOOD PAIRS
// ==========================================
// Problem: Count pairs (i, j) where i < j and nums[i] === nums[j].
// Example: [1, 2, 3, 1, 1, 3] -> 4
//
// Approach: Frequency counting.
// When we see a number for the kth time, it forms k new pairs with previous occurrences.
// Time: O(n)
// Space: O(n)

function numIdenticalPairs(nums) {
    const freq = new Map();
    let count = 0;

    for (const num of nums) {
        const prevCount = freq.get(num) || 0;
        count += prevCount; // Each previous occurrence forms a new pair
        freq.set(num, prevCount + 1);
    }
    return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
