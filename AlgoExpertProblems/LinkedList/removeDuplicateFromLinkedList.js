class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList

  while (current && current.next) {
    let nextNode = current.next
    if (current.value === nextNode.value) {
      let temp = nextNode.next
      current.next = temp
    } else current = current.next
  }

  return linkedList
}
