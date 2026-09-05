// ==========================================
// JEWELS AND STONES
// ==========================================
// Problem: Given string 'jewels' and 'stones', count how many stones are jewels.
// Example: jewels = "aA", stones = "aAAbbbb" → 3
//
// Approach: Use a Set for O(1) lookup of jewels.
// Time: O(J + S) where J = jewels.length, S = stones.length
// Space: O(J) for the Set

function numJewelsInStones(jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;

  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
