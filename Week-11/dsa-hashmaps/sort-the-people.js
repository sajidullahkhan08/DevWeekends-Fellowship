// ==========================================
// SORT THE PEOPLE
// ==========================================
// Problem: Given names and heights arrays, return names sorted by height descending.
// Example: names = ["Mary","John","Emma"], heights = [180,165,170] -> ["Mary","Emma","John"]
//
// Approach: Map name -> height, then sort by height.
// Time: O(n log n) for sorting
// Space: O(n)

function sortPeople(names, heights) {
    const nameToHeight = new Map();
    for (let i = 0; i < names.length; i++) {
        nameToHeight.set(names[i], heights[i]);
    }

    return names.sort((a, b) => nameToHeight.get(b) - nameToHeight.get(a));
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
// ["Mary", "Emma", "John"]
