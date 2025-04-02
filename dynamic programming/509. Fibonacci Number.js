// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
  // F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  // Declare an array to store Fibonacci numbers
  const f = new Array(n + 1); // 1 extra to handle case, n = 0

  // 0th and 1st numbers of the series are 1
  f[0] = 1;
  f[1] = 1;

  for (let i = 2; i <= n; i++) {
    // Add the previous 2 numbers in the series and store it
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
};