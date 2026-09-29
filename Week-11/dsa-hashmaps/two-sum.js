// ==========================================
// TWO SUM
// ==========================================
// Problem: Find two numbers that add up to target. Return their indices.
// Example: nums = [2, 7, 11, 15], target = 9 -> [0, 1]
//
// BRUTE FORCE: O(n^2)
// For each number, scan the rest of the array to find its complement.
// Two nested loops = n * n = n^2 operations.
//
// OPTIMAL: O(n) using a HashMap
// As we iterate, store each number in a map with its index.
// For each number, check if (target - number) already exists in the map.
// Map lookups are O(1), so total time is O(n).
//
// Time: O(n) - single pass, each lookup is O(1)
// Space: O(n) - storing numbers in the map

function twoSum(nums, target) {
    const seen = new Map(); // number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // O(1) lookup: have we seen the complement before?
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        // Store current number for future lookups
        seen.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
