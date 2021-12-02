class MinHeap {
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
      if (currentIdx != -1 && heap[secondChildIdx] < heap[firstChidIdx]) {
        swapIdx = secondChildIdx;
      } else swapIdx = firstChidIdx;

      if (heap[swapIdx] < heap[currentIdx]) {
        swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        firstChidIdx = currentIdx * 2 + 1;
      } else return;
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
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

let minHeap = new MinHeap([]);

minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(2);
// [1,3,2]
console.log(minHeap);
// 1
console.log(minHeap.peek());
// 1
console.log(minHeap.remove());
//2
console.log(minHeap.remove());
// 3
console.log(minHeap.remove());
minHeap.insert(4);
minHeap.insert(5);
// [4,5]
console.log(minHeap);

//Another way of construct MINHEAP;

class MinHeap {
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
    const min = this.value.pop();
    this.siftDown(0);
    return min;
  }

  siftUp(idx) {
    const parent = Math.floor((idx - 1) / 2);
    let max = idx;

    if (parent >= 0 && this.value[parent] > this.value[max]) max = parent;

    if (max !== idx) {
      this.swap(max, idx);
      this.siftUp(max);
    }
  }

  peek() {
    return this.value[0];
  }
  siftDown(idx) {
    const leftChild = 2 * idx + 1;
    const rightChild = 2 * idx + 2;
    let min = idx;

    if (
      leftChild < this.value.length &&
      this.value[leftChild] < this.value[min]
    )
      min = leftChild;
    if (
      rightChild < this.value.length &&
      this.value[rightChild] < this.value[min]
    )
      min = rightChild;

    if (min !== idx) {
      this.swap(min, idx);
      this.siftDown(min);
    }
  }

  swap(i, j) {
    [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
  }
}

let minHeap = new MinHeap(5);

minHeap.add(3);
minHeap.add(1);
minHeap.add(2);
// [1,3,2]
console.log(minHeap);
// 1
console.log(minHeap.peek());
// 1
console.log(minHeap.remove());
//2
console.log(minHeap.remove());
// 3
console.log(minHeap.remove());
minHeap.add(4);
minHeap.add(5);
// [4,5]
console.log(minHeap);
