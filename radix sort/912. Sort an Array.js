// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Input: nums = [5, 2, 3, 1]
// Output: [1, 2, 3, 5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let swap = function (nums, indx_1, indx_2) {
    [nums[indx_1], nums[indx_2]] = [nums[indx_2], nums[indx_1]]
  }
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {

        swap(nums, j, j + 1);
      }
    }
  }
  return nums
}