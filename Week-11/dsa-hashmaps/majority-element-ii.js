// ==========================================
// MAJORITY ELEMENT II
// ==========================================
// Problem: Find all elements that appear more than floor(n/3) times.
// Example: [3, 2, 3] -> [3]
// Example: [1, 1, 1, 3, 3, 2, 2, 2] -> [1, 2]
//
// Approach: Frequency map (Boyer-Moore for n/3 is complex, hashmap is clearer).
// Time: O(n)
// Space: O(n)

function majorityElement(nums) {
    const freq = new Map();
    const n = nums.length;
    const threshold = Math.floor(n / 3);
    const result = [];

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const [num, count] of freq.entries()) {
        if (count > threshold) {
            result.push(num);
        }
    }
    return result;
}

console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // [1, 2]
