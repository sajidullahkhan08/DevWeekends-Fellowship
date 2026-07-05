// ==========================================
// TOPIC 3: ITERATORS & GENERATORS
// ==========================================

// 1. THE ITERATOR PROTOCOL (Under the hood)
// An iterator is any object that implements a next() method.
function createRangeIterator(start, end) {
  let current = start;
  return {
    next: function () {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const myIterator = createRangeIterator(1, 3);
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }

// 2. GENERATORS (The easy way to make iterators)
// Notice the function* (asterisk) and the 'yield' keyword.
function* countUpTo(max) {
  let count = 1;
  while (count <= max) {
    yield count; // Pauses the function and returns the value
    count++;
  }
}

const counter = countUpTo(3);
console.log(counter.next()); // { value: 1, done: false } -> Function PAUSES here
console.log(counter.next()); // { value: 2, done: false } -> Function RESUMES and pauses again
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

// Generators are iterable! We can use for...of
for (let num of countUpTo(3)) {
  console.log(num); // 1, 2, 3
}
