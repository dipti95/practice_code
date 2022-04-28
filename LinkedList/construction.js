// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    //Code here

    const node = {
      value: value,
      next: null,
    }
    if (this.length === 1) {
      this.head.next = node
      this.tail = node
      this.length++
    } else {
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
