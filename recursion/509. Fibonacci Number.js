// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (num) {
  if (num == 0) return 0
  if (num == 1) return 1
  return fib(num - 1) + fib(num - 2);


};