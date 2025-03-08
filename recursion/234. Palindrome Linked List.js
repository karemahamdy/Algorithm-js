// 234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
} function isPalindrome(head) {
  if (!head || !head.next) return true;

  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseList(slow);
  let firstHalf = head;

  let p1 = firstHalf, p2 = secondHalf;
  let isPalin = true;

  while (p2) { 
    if (p1.val !== p2.val) {
      isPalin = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  reverseList(secondHalf);

  return isPalin;
}