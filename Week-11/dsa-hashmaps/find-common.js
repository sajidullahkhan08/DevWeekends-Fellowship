// ==========================================
// FIND COMMON ELEMENTS BETWEEN TWO ARRAYS
// ==========================================
// Problem: Return [count of nums1 elements in nums2, count of nums2 elements in nums1]
// Example: nums1 = [2, 3, 2], nums2 = [1, 2] -> [2, 1]
//
// Approach: Use Sets for O(1) lookups.
// Time: O(n + m)
// Space: O(n + m)

function findIntersectionValues(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let count1 = 0, count2 = 0;
    for (const num of nums1) if (set2.has(num)) count1++;
    for (const num of nums2) if (set1.has(num)) count2++;

    return [count1, count2];
}

console.log(findIntersectionValues([2, 3, 2], [1, 2])); // [2, 1]
