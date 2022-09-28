function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyNode: ListNode | null = new ListNode()
  let curr: ListNode | null = dummyNode
  let carry = 0

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0

    let sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    let val = sum % 10

    curr.next = new ListNode(val)

    curr = curr.next

    l1 = l1?.next || null
    l2 = l2?.next || null
  }
  return dummyNode.next
}
