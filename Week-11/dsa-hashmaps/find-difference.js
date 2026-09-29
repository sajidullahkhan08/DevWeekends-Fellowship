// ==========================================
// FIND THE DIFFERENCE OF TWO ARRAYS
// ==========================================
// Problem: Return [distinct in nums1 not in nums2, distinct in nums2 not in nums1]
// Example: nums1 = [1, 2, 3], nums2 = [1, 1, 2, 2] -> [[3], []]
//
// Approach: Convert both to Sets for O(1) lookup, then filter.
// Time: O(n + m)
// Space: O(n + m)

function findDifference(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const onlyIn1 = [...set1].filter(num => !set2.has(num));
    const onlyIn2 = [...set2].filter(num => !set1.has(num));

    return [onlyIn1, onlyIn2];
}

console.log(findDifference([1, 2, 3], [1, 1, 2, 2])); // [[3], []]
