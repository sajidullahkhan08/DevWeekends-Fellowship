function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the first unsorted element is the minimum

    // Find the actual minimum in the rest of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum with the first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log("Selection Sort:", selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
