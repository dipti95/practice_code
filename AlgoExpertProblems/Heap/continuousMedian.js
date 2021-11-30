class ContinuousMedianHandler {
  constructor() {
    this.lower = new ConstructHeap(MaxHeap, []);
    this.higher = new ConstructHeap(MinHeap, []);
    this.median = null;
  }

  insert(value) {
    if (this.lower.length <= 0 || value < this.lower.peek()) {
      this.lower.insert(number);
    } else this.higher.insert(number);
    this.rebalanceHeap();
    this.updateMedian();
  }

  rebalanceHeap() {
    if (this.lower.length - this.higher.length === 2) {
      this.higher.insert(this.lower.remove());
    } else if (this.higher.length - this.lower.length === 2) {
      this.lower.insert(this.higher.remove());
    }
  }

  updateMedian() {
    if (this.higher.length === this.lower.length) {
      this.median = (this.lower.peek() + this.higher.peek()) / 2;
    } else if (this.lower.length > this.higher.length)
      this.median = this.lower.peek();
    else this.median = this.higher.peek();
  }

  getMedian() {
    return this.median;
  }
}

class ConstructHeap {
  constructor(heapType, array) {
    this.heapType = heapType;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    // Write your code here.
    let parentNodeIdx = Math.floor((array.length - 2) / 2);
    for (let i = parentNodeIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let firstChildIdx = currentIdx * 2 + 1;
    while (firstChildIdx <= endIdx) {
      let secondChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let swapIdx = 0;
      if (secondChildIdx !== -1) {
        if (this.heapType(heap[secondChildIdx], heap[firstChildIdx])) {
          swapIdx = secondChildIdx;
        } else {
          swapIdx = firstChildIdx;
        }
      } else {
        swapIdx = firstChildIdx;
      }
      if (this.heapType(heap[swapIdx], heap[currentIdx])) {
        swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        firstChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0) {
      if (this.heapType(heap[currentIdx], heap[parentIdx])) {
        swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else return;
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    swap(0, this.length - 1, this.heap);
    let removeVal = this.heap.pop();
    this.length--;
    this.siftDown(0, this.length - 1, this.heap);
    return removeVal;
  }

  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.length - 1, this.heap);
  }
}

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}

function MinHeap(a, b) {
  return a < b;
}

function MaxHeap(a, b) {
  return a > b;
}
