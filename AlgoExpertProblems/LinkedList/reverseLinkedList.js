class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
// Think about tail.next value, tail.next = null
function reverseLinkedList(head) {
  let previousNode = null
  let curr = head

  while (curr) {
    let nextVal = curr.next
    curr.next = previousNode
    previousNode = curr
    curr = nextVal
  }
  return previousNode
}
