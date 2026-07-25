function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop for the number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop to compare adjacent elements
    // We subtract 'i' because the last 'i' elements are already sorted
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Bubble Sort:", bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
