// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair[a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Input: arr = [4, 2, 1, 3]
// Output: [[1, 2], [2, 3], [3, 4]]


var minimumAbsDifference = function (arr) {
  const sorted = arr.sort((a, b) => a - b)
  let res = []
  let diff = Infinity
  for (let i = 0; i < sorted.length; i++) {
    const currDiff = sorted[i + 1] - sorted[i]
    if (currDiff < diff) {
      diff = currDiff
      res = []
    }
    if (currDiff === diff) {
      res.push([sorted[i], sorted[i + 1]])
    }
  }
  return res
};
