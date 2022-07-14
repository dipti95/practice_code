class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let current = head

  while (current) {
    let val = current
    current = current.next
    val.next = prev
    prev = val
  }
  return prev
}
