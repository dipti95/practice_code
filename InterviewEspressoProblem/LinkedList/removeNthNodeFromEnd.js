function removeNthFromEnd(head, n) {
  let dummyList = new ListNode(0);
  dummyList.next = head;
  let count = 0;
  let first = dummyList;
  let second = dummyList;

  while (count < n) {
    second = second.next;
    count++;
  }
  if (second === null) {
    dummyList.val = dummyList.next.val;
    dummyList.next = dummyList.next.next;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;

  return dummyList.next;
}
