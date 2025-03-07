// 231. Power of Two

// Given an integer n, return true if it is a power of two.Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

  // Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1


var isPowerOfTwo = function (n) {
  // log 
  if (n == 1) return true
  if (n == 0) return false
  if (n % 2 != 0) return false
  return isPowerOfTwo(n / 2)
  // return n>0 && Math.log2(n) % 1 === 0
};