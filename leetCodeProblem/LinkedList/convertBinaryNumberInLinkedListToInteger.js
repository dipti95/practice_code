function getDecimalValue(head) {
  let result = 0;
  let curr = head;
  while (curr) {
    result = result * 2 + curr.val;
    curr = curr.next;
  }
  return result;
}
