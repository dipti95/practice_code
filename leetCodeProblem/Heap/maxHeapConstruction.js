class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // formula to find parent node is
    // parentNode = Math.floor((index of given child node -1)/2)
    let FirstParentNodeIdx = Math.floor((array.length - 2) / 2);
    // Hear we are finding the parent node of last children node
    for (let i = FirstParentNodeIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }
  siftDown(currentIdx, endIdx, heap) {
    let firstChidIdx = 2 * currentIdx + 1;

    while (firstChidIdx <= endIdx) {
      let secondChildIdx =
        2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let swapIdx = 0;
      if (currentIdx != -1 && heap[secondChildIdx] > heap[firstChidIdx]) {
        swapIdx = secondChildIdx;
      } else swapIdx = firstChidIdx;

      if (heap[swapIdx] > heap[currentIdx]) {
        swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        firstChidIdx = currentIdx * 2 + 1;
      } else return;
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] > heap[parentIdx]) {
      swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    // removing root node ;
    swap(0, this.heap.length - 1, this.heap);
    let removeVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removeVal;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}

let maxHeap = new MaxHeap([]);

maxHeap.insert(3);
maxHeap.insert(1);
maxHeap.insert(2);
// [3,2,1]
console.log(maxHeap);
// 3
console.log(maxHeap.peek());
// 3
console.log(maxHeap.remove());
//2
console.log(maxHeap.remove());
// 1
console.log(maxHeap.remove());
maxHeap.insert(4);
maxHeap.insert(5);
// [5,4]
console.log(maxHeap);

// Another way of MAXHEAP construction

class MaxHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.value = [];
  }

  add(val) {
    this.value.push(val);
    this.siftUp(this.value.length - 1);
    if (this.value.length > this.capacity) this.remove();
  }

  remove() {
    this.swap(0, this.value.length - 1);
    const max = this.value.pop();
    this.siftDown(0);
    return max;
  }

  siftUp(idx) {
    const parent = Math.floor((idx - 1) / 2);
    let min = idx;

    if (parent >= 0 && this.value[parent] < this.value[min]) min = parent;

    if (min !== idx) {
      this.swap(min, idx);
      this.siftUp(min);
    }
  }

  peek() {
    return this.value[0];
  }
  siftDown(idx) {
    const leftChild = 2 * idx + 1;
    const rightChild = 2 * idx + 2;
    let max = idx;

    if (
      leftChild > this.value.length &&
      this.value[leftChild] > this.value[max]
    )
      max = leftChild;
    if (
      rightChild > this.value.length &&
      this.value[rightChild] > this.value[max]
    )
      max = rightChild;

    if (max !== idx) {
      this.swap(max, idx);
      this.siftDown(max);
    }
  }

  swap(i, j) {
    [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
  }
}

let maxHeap = new MaxHeap(5);

maxHeap.add(3);
maxHeap.add(1);
maxHeap.add(2);
// [1,3,2]
console.log(maxHeap);
// 1
console.log(maxHeap.peek());
// 1
console.log(maxHeap.remove());
//2
console.log(maxHeap.remove());
// 3
console.log(maxHeap.remove());
maxHeap.add(4);
maxHeap.add(5);
// [4,5]
console.log(maxHeap);
