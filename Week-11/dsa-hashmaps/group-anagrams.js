// ==========================================
// GROUP ANAGRAMS
// ==========================================
// Problem: Group strings that are anagrams of each other.
// Example: ["eat","tea","tan","ate","nat","bat"]
//        -> [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// KEY DESIGN DECISION: What to use as the hashmap key?
//
// OPTION 1: Sorted string as key
//   - "eat" -> sort -> "aet"
//   - "tea" -> sort -> "aet"  (Same key!)
//   - Time: O(n * k log k) where k = max string length
//
// OPTION 2: Character count as key
//   - "eat" -> count -> "1a1e1t0b0c..."
//   - "tea" -> count -> "1a1e1t0b0c..."  (Same key!)
//   - Time: O(n * k) - faster for long strings
//
// I will use OPTION 1 (sorted string) because it is simpler to understand.
//
// Time: O(n * k log k)
// Space: O(n * k)

function groupAnagrams(strs) {
    const groups = new Map();

    for (const str of strs) {
        // Use sorted string as the key
        const key = str.split('').sort().join('');

        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(str);
    }

    return [...groups.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]
