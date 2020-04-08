/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  var pointer = head;
  var node = head.next;

  while(node) {
    pointer = pointer.next
    node = node.next && node.next.next;
  }

  return pointer;
};
