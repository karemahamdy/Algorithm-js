// Given a list of non - negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

var largestNumber = function (nums) {
  nums = nums.map(String);
  nums.sort((a, b) => (b + a) - (a + b));
  let result = nums.join('');
  return result[0] === '0' ? '0' : result;
};

 nums = [10, 2]
// Output: "210"

 nums = [3, 30, 34, 5, 9]
// Output: "9534330"