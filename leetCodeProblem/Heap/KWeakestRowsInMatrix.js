function kWeakestRows(mat, k) {
  let obj = {};
  for (let i = 0; i < mat.length; i++) {
    obj[i] = 0;
    for (let ele of mat[i]) {
      if (ele) obj[i] += 1;
    }
  }

  let result = [];

  let value = Object.values(obj);
  let heap = new MinHeap(value);
  let dummyObj = {};

  for (let i = 0; i < k; i++) {
    let ele = heap.remove();
    for (let key in obj) {
      if (obj[key] === ele && !(key in dummyObj)) {
        result.push(key);
        dummyObj[key] = true;
        break;
      }
    }
  }

  return result;
}

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
