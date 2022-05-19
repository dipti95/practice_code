class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1
    this.list = new LinkedList()
    this.count = 0
    this.obj = {}
  }

  insertKeyValuePair(key, value) {
    if (key in this.obj) {
      this.replaceKey(key, value)
    } else {
      if (this.count === this.maxSize) {
        this.evictLeastUsed()
      } else {
        this.count++
      }
      this.obj[key] = new LinkedListNode(key, value)
    }
    this.updateMostRecent(this.obj[key])
  }

  getValueFromKey(key) {
    if (key in this.obj) {
      this.updateMostRecent(this.obj[key])
      return this.obj[key].value
    }
    return null
  }

  getMostRecentKey() {
    return this.list.head.key
  }

  replaceKey(key, value) {
    this.obj[key].value = value
  }
  evictLeastUsed() {
    let key = this.list.tail.key
    this.list.removeTail()
    delete this.obj[key]
  }
  updateMostRecent(value) {
    this.list.setHead(value)
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  setHead(node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else if (this.head === node) {
      return
    } else if (this.head === this.tail) {
      this.tail.prev = node
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

  removeTail(node) {
    if (this.tail === null) return
    if (this.tail === this.head) {
      this.tail = null
      this.head = null
      return
    }
    this.tail = this.tail.prev
    this.tail.next = null
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
