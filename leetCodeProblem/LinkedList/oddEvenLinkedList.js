function oddEvenList(head) {
  if (!head) return head;
  let odd = head;
  let even = head.next;

  while (odd.next && odd.next.next) {
    const ele = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    ele.next = odd.next;
  }

  odd.next = even;

  return head;
}
