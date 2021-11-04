function isCycle(head) {
  if (!head) return false;

  let first = head;
  let second = head;

  while (first) {
    if (first.next === null) return false;

    first = first.next.next;
    second = second.next;
    if (first === second) return true;
  }
  return false;
}
