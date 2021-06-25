function reverseLinkedList(head) {
    let currentNode = null;
    while (head) {
        let nextVal = head.next;
        head.next = currentNode;
        currentNode = head;
        head = nextVal
    }
    return currentNode
}
