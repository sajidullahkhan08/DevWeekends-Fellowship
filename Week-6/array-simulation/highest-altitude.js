// ==========================================
// FIND THE HIGHEST ALTITUDE
// ==========================================
// Problem: Given gain array (altitude changes), find the highest altitude reached.
// Start at altitude 0.
// Example: [-5, 1, 5, 0, -7] → altitudes are [0, -5, -4, 1, 1, -6] → max is 1
//
// Approach: Track current altitude and max altitude seen so far.
// Time: O(n) - single pass
// Space: O(1) - only two variables

function largestAltitude(gain) {
  let currentAltitude = 0;
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    if (currentAltitude > maxAltitude) {
      maxAltitude = currentAltitude;
    }
  }
  return maxAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
