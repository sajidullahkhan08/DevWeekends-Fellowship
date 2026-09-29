// ==========================================
// MAJORITY ELEMENT
// ==========================================
// Problem: Find the element that appears more than floor(n/2) times.
// Example: [2, 2, 1, 1, 1, 2, 2] -> 2
//
// Approach 1 (Hashmap): Count frequencies -> O(n) time, O(n) space
// Approach 2 (Boyer-Moore): O(n) time, O(1) space
//
// Time: O(n)
// Space: O(1) with Boyer-Moore

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
