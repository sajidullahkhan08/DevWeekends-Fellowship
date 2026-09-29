// ==========================================
// INCREASING DECREASING STRING
// ==========================================
// Problem: Reorder string: pick smallest available char, then next smallest, ..., 
// then largest, then next largest, ..., repeat until done.
// Example: "aaaabbbbcccc" -> "abccbaabccba"
//
// Approach: Frequency map. Alternate between ascending and descending passes.
// Time: O(n)
// Space: O(1) - at most 26 letters

function sortString(s) {
    const freq = {};
    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }

    const sortedChars = Object.keys(freq).sort();
    let result = '';

    while (result.length < s.length) {
        // Ascending pass
        for (const c of sortedChars) {
            if (freq[c] > 0) {
                result += c;
                freq[c]--;
            }
        }
        // Descending pass
        for (let i = sortedChars.length - 1; i >= 0; i--) {
            const c = sortedChars[i];
            if (freq[c] > 0) {
                result += c;
                freq[c]--;
            }
        }
    }
    return result;
}

console.log(sortString("aaaabbbbcccc")); // "abccbaabccba"
