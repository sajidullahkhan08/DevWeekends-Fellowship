// ==========================================
// SORT CHARACTERS BY FREQUENCY
// ==========================================
// Problem: Sort string by character frequency (descending).
// Example: "tree" -> "eert" or "eetr"
//
// Approach: Frequency map, then sort by frequency.
// Time: O(n log n) due to sorting
// Space: O(n)

function frequencySort(s) {
    const freq = new Map();
    for (const c of s) {
        freq.set(c, (freq.get(c) || 0) + 1);
    }

    // Sort characters by frequency descending
    const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const [char, count] of sorted) {
        result += char.repeat(count);
    }
    return result;
}

console.log(frequencySort("tree"));     // "eert" or "eetr"
console.log(frequencySort("cccaaa"));   // "aaaccc" or "cccaaa"
