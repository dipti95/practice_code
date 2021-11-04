function reverseLinkedList(head) {
  let prev = null;
  while (head) {
    let ele = head.next;
    head.next = null;
    prev = head;
    head = ele;
  }
  return prev;
}
