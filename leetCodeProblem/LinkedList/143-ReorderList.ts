/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reorderList(head: ListNode | null): void {
  let slow: ListNode | null = head
  let fast: ListNode | null = head.next

  // making two halfs of the linkedList

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // fiestHalf always starts from head that how below var
  let firstHalf = head
  // storing secondHalf of the linked list and then make slow.next to be null
  // because we know that while doing reordering slow will be the last node of the linkedList
  let secondHalf = slow.next

  slow.next = null

  //Now we need to reverse the secondHalf

  let prev: ListNode | null = null

  while (secondHalf) {
    let temp = secondHalf.next
    secondHalf.next = prev
    prev = secondHalf
    secondHalf = temp
  }

  // After doing secondHalf is equal to null but reverse secondHalf is prev
  // simply we can do to avoid confusion in naming
  secondHalf = prev

  // mearge firstHalf  and secondHalf
  while (secondHalf) {
    let temp1 = firstHalf.next
    let temp2 = secondHalf.next
    firstHalf.next = secondHalf
    secondHalf.next = temp1
    firstHalf = temp1
    secondHalf = temp2
  }
}
