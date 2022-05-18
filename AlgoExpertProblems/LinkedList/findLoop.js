class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function findLoop(head) {
  let nodeOne = head.next
  let nodeTwo = head.next.next
  while (nodeOne !== nodeTwo) {
    nodeOne = nodeOne.next
    nodeTwo = nodeTwo.next.next
  }
  nodeOne = head
  while (nodeOne !== nodeTwo) {
    nodeOne = nodeOne.next
    nodeTwo = nodeTwo.next
  }
  return nodeOne
}
