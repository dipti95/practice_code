class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1
  }

  insertKeyValuePair(key, value) {}

  getValueFromKey(key) {}

  getMostRecentKey() {}
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  setHead(node) {
    if (this.head === null) {
      this.head = node
    } else if (this.head === node) return
    else if (this.head === this.tail) {
      this.head.prev = node
      this.head = node
      this.head.next = this.tail
    } else {
      if (this.tail === node) this.removeTail()
      //remove binding between two node ,beause we are removing that node from tail
      //but node.prev have some value but we dont want any prev or next value before setting as head.
      // that's why we are calling removeBinding to detach from prev and next.
      node.removeBinding()
      // after that we are setting that node as head and then making link.
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }
}

class LinkedListNode {
  constructor(key, value) {
    this.prev = null
    this.next = null
    this.key = key
    this.value = value
  }
  removeBinding() {
    if (this.prev !== null) {
      this.prev.next = this.next
    }
    if (this.next !== null) {
      this.next.prev = this.prev
    }
    this.prev = null
    this.next = null
  }
}
