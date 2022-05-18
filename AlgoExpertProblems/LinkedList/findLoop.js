class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/* 
Think about rabbit and turtle race.If rabbit and turtle is running in a circular path
and speed of rabbit is faster than turtle which is obvious.
So if rabbit find turtle 
while running it means they are running in a circular path
*/
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
