// ==========================================
// ISOMORPHIC STRINGS
// ==========================================
// Problem: Two strings are isomorphic if characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character.
// No two characters may map to the same character.
// Example: s = "egg", t = "add" → true
// Example: s = "foo", t = "bar" → false
// Example: s = "paper", t = "title" → true
//
// Approach: Use two maps to ensure bijective mapping (one-to-one).
// Time: O(n)
// Space: O(1) - at most 26 characters

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = {}; // Maps characters from s to t
  const mapTS = {}; // Maps characters from t to s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if mapping exists and is consistent
    if (mapST[charS] !== undefined) {
      if (mapST[charS] !== charT) return false;
    } else {
      mapST[charS] = charT;
    }

    if (mapTS[charT] !== undefined) {
      if (mapTS[charT] !== charS) return false;
    } else {
      mapTS[charT] = charS;
    }
  }
  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
