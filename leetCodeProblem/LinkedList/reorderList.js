function reorderList(head) {
  let curr = head;
  let arr = [];

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  while (arr.length) {
    head.val = arr.shift();
    console.log(arr.length);
    if (arr.length) {
      head = head.next;
      head.val = arr.pop();
    }
    head = head.next;
  }
}
