function middleNode(head) {
  let first = head;
  let second = head;
  while (first !== null && first.next !== null) {
    first = first.next.next;
    second = second.next;
  }
  return second;
}
