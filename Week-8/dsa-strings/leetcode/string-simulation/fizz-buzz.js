// ==========================================
// FIZZ BUZZ
// ==========================================
// Problem: For numbers 1 to n:
// - If divisible by 3, return "Fizz"
// - If divisible by 5, return "Buzz"
// - If divisible by both 3 and 5, return "FizzBuzz"
// - Otherwise, return the number as a string
//
// Approach: Check divisibility conditions in order.
// Time: O(n)
// Space: O(n) for the result array

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      // Divisible by both 3 and 5
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
