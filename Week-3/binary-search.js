function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle index

    if (sortedArr[mid] === target) {
      return mid; // Target found!
    } else if (sortedArr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  return -1; // Target not found
}
console.log("Binary Search Index:", binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
