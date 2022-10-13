//Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null

  while (lists.length > 1) {
    let dummy = []

    for (let i = 0; i < lists.length; i += 2) {
      let list1 = lists[i]
      let list2 = i + 1 > lists.length ? null : lists[i + 1]
      dummy.push(mergeTwoLinkedList(list1, list2))
    }
    lists = dummy
  }

  return lists[0] || null
}

function mergeTwoLinkedList(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummyLinkedList: ListNode | null = new ListNode()
  let tail = dummyLinkedList

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }
    tail = tail.next
  }
  tail.next = list1 || list2
  return dummyLinkedList.next
}
