class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeKthNodeFromEnd(head, k) {
  let length = 0
  let curr = head
  while (curr) {
    length++
    curr = curr.next
  }

  console.log(k)
  k = length - k
  console.log(k)
  if (k === 0) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }
  let current = head
  while (current) {
    console.log(k)

    if (k === 1) {
      console.log(current)
      current.next = current.next.next
      return
    }
    k--
    current = current.next
  }
}
