// ==========================================
// NEXT GREATER ELEMENT I
// ==========================================
// Problem: For each element in nums1, find the next greater element in nums2.
// Example: nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2] -> [-1, 3, -1]
//
// Approach: Use a monotonic decreasing stack + hashmap.
// - Traverse nums2, maintaining a stack of "waiting" elements
// - When we see a number bigger than stack top, it is the "next greater" for stack top
// - Store result in a map, then look up answers for nums1
//
// Time: O(n + m) where n = nums2.length, m = nums1.length
// Space: O(n) for stack and map

function nextGreaterElement(nums1, nums2) {
    const nextGreater = new Map();
    const stack = [];

    for (const num of nums2) {
        // While current number is greater than stack top, it is the "next greater"
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // Look up answers for nums1
    return nums1.map(num => nextGreater.get(num) ?? -1);
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
