// ==========================================
// FIND WORDS THAT CAN BE FORMED BY CHARACTERS
// ==========================================
// Problem: Sum lengths of words that can be formed using chars (each char used once).
// Example: words = ["cat","bt","hat","tree"], chars = "atach" -> 6 ("cat" + "hat")
//
// Approach: Frequency map of chars. For each word, check if we have enough of each letter.
// Time: O(n * m) where n = number of words, m = max word length
// Space: O(1) - at most 26 letters

function countCharacters(words, chars) {
    const charFreq = {};
    for (const c of chars) {
        charFreq[c] = (charFreq[c] || 0) + 1;
    }

    let totalLength = 0;

    for (const word of words) {
        const wordFreq = {};
        let canForm = true;

        for (const c of word) {
            wordFreq[c] = (wordFreq[c] || 0) + 1;
            if (wordFreq[c] > (charFreq[c] || 0)) {
                canForm = false;
                break;
            }
        }

        if (canForm) totalLength += word.length;
    }
    return totalLength;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // 6
