// ==========================================
// CHECK IF THE SENTENCE IS PANGRAM
// ==========================================
// Problem: A pangram contains every letter of the alphabet at least once.
// Example: "thequickbrownfoxjumpsoverthelazydog" -> true
//
// Approach: Put all chars in a Set, check if size === 26.
// Time: O(n)
// Space: O(1) - at most 26 letters

function checkIfPangram(sentence) {
    return new Set(sentence).size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
