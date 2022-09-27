function copyRandomList(head: Node | null): Node | null {
  const oldToNewMap = new Map()
  oldToNewMap.set(null, null)
  let curr = head
  while (curr) {
    let copy = new Node(curr.val)
    if (!oldToNewMap.has(curr)) {
      oldToNewMap.set(curr, copy)
    }
    curr = curr.next
  }

  curr = head
  while (curr) {
    let copy = oldToNewMap.get(curr)
    copy.next = oldToNewMap.get(curr.next)
    copy.random = oldToNewMap.get(curr.random)
    curr = curr.next
  }

  return oldToNewMap.get(head)
}
