function mergeTwoSortedList(l1, l2) {
    let currentNode = new ListNode(0);
    let list = currentNode
    while (l1 !== null && l2 !== null) {

        if (l1.val < l2.val) {
            currentNode.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            currentNode.next = new ListNode(l2.val)
            l2 = l2.next
        }
        currentNode = currentNode.next
    }
    if (l1 !== null) currentNode.next = l1;
    if (l2 !== null) currentNode.next = l2;

    return list.next
}