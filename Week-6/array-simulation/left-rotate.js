// ==========================================
// LEFT ROTATE ARRAY BY ONE PLACE
// ==========================================
// Problem: Rotate array left by 1 position.
// Example: [1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]
//
// Approach: Save first element, shift everything left by 1, put saved element at end.
// Time: O(n)
// Space: O(1) - in-place

function leftRotateByOne(arr) {
  if (arr.length <= 1) return arr;

  const first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first;

  return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]
