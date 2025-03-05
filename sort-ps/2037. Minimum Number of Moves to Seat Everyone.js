// 2037. Minimum Number of Moves to Seat Everyone

// There are n availabe seats and n students standing in a room.You are given an array seats of length n, where seats[i] is the position of the ith seat.You are also given the array students of length n, where students[j] is the position of the jth student.
// You may perform the following move any number of times:
// Increase or decrease the position of the ith student by 1(i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
// Note that there may be multiple seats or students in the same position at the beginning.

// Input: seats = [3, 1, 5], students = [2, 7, 4]
// Output: 4

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

var minMovesToSeat = function (seats, students) {
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

  }

  function merge(left, right) {
    let sortedArr = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        sortedArr.push(left[i]);
        i++;
      } else {
        sortedArr.push(right[j]);
        j++;
      }
    }

    return sortedArr.concat(left.slice(i)).concat(right.slice(j));
  }

  let moves = 0;
  let sortedSeats = mergeSort(seats);
  let sortedStudents = mergeSort(students);

  for (let i = 0; i < sortedSeats.length; i++) {
    moves += Math.abs(sortedSeats[i] - sortedStudents[i])
  }

  return moves;

};