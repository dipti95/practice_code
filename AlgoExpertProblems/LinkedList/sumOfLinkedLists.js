class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(LinkedListOne, LinkedListTwo) {
    // define new node which we can say that headNode with value 0 
    let newDummyNode = new LinkedList(0)
    let currentNode = newDummyNode;
    let carry = 0

    let nodeOne = LinkedListOne;
    let nodeTwo = LinkedListTwo;

    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        let valueOne = nodeOne !== null ? nodeOne.value : 0
        let valueTwo = nodeTwo !== null ? nodeTwo.value : 0

        let sum = valueOne + valueTwo + carry;
        let newValue = sum % 10;
        let newLinkedList = new LinkedList(newValue)
        currentNode.next = newLinkedList;
        currentNode = newLinkedList;

        carry = Math.floor(sum / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null
    }
    return newDummyNode.next
    // we did .next because if we do newDummyNode then it will return only head value;
}
let LinkedListOne = {
    "head": "2",
    "nodes": [
        { "id": "2", "next": "4", "value": 2 },
        { "id": "4", "next": "7", "value": 4 },
        { "id": "7", "next": "1", "value": 7 },
        { "id": "1", "next": null, "value": 1 }
    ]
}

let LinkedListTwo = {
    "head": "9",
    "nodes": [
        { "id": "9", "next": "4", "value": 9 },
        { "id": "4", "next": "5", "value": 4 },
        { "id": "5", "next": null, "value": 5 }
    ]
}


