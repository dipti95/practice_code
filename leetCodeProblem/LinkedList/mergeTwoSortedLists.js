function mergeTwoSortedList(list1, list2) {
  let dummyList = new linkedList(0);
  let currentNode = dummyList;

  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  if (list1 !== null) currentNode.next = list1;
  if (list2 !== null) currentNode.next = list2;

  return dummyList.next;
}
