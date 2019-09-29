// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  var extra = 0;
  var prevNode = null;
  var resultList = null;

  do {
    var sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + extra;

    if (sum >= 10) {
      extra = Math.floor(sum / 10);

      sum = sum % 10;
    } else {
      extra = 0;
    }

    var newListItem = { val: sum, next: null }

    if (!resultList) {
      resultList = newListItem
    }

    if (prevNode) {
      prevNode.next = newListItem
    }

    prevNode = newListItem

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  } while (l1 || l2);

  if (extra > 0) {
    prevNode.next = { val: extra, next: null }
  }

  return resultList;
}
