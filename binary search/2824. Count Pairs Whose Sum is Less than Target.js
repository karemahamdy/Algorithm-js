// 2824. Count Pairs Whose Sum is Less than Target

// Input: nums = [-1, 1, 2, 3, 1], target = 2
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
  // - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
    // - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that(0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1, right = nums.length - 1, lastValid = i;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[i] + nums[mid] < target) {
        lastValid = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    count += lastValid - i;
  }

  return count;
};
