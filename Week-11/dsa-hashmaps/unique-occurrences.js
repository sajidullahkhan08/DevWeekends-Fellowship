// ==========================================
// UNIQUE NUMBER OF OCCURRENCES
// ==========================================
// Problem: Return true if every value in the array has a unique frequency.
// Example: [1, 2, 2, 1, 1, 3] -> true (1 appears 3x, 2 appears 2x, 3 appears 1x)
// Example: [1, 2] -> false (both appear 1x: not unique)
//
// Approach: Frequency map + Set to check uniqueness of counts.
// Time: O(n)
// Space: O(n)

function uniqueOccurrences(arr) {
    const freq = new Map();
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const counts = new Set(freq.values());
    return counts.size === freq.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
