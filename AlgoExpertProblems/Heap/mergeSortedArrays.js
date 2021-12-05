// By Heap datastucture

function mergeSortedArrays(arrays) {
  let resultArr = [];
  let smallIdx = [];
  for (let i = 0; i < arrays.length; i++) {
    smallIdx.push({ i, eleIdx: 0, num: arrays[i][0] });
  }
  console.log(smallIdx);

  let heap = new MinHeap(smallIdx);
  console.log(heap);
  while (!heap.isEmpty()) {
    let smallItem = heap.remove();
    const { i, eleIdx, num } = smallItem;
    resultArr.push(num);
    if (eleIdx === arrays[i].length - 1) continue;
    heap.insert({ i, eleIdx: eleIdx + 1, num: arrays[i][eleIdx + 1] });
  }
  return resultArr;
}
// MIN HEAP construction
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array) {
    let firstParentNode = Math.floor((array.length - 2) / 2);
    for (let i = firstParentNode; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, array) {
    let firstChildIdx = 2 * currentIdx + 1;

    while (firstChildIdx <= endIdx) {
      let secondChildIdx =
        2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let swapIdx = 0;
      if (
        secondChildIdx !== -1 &&
        array[secondChildIdx].num < array[firstChildIdx].num
      ) {
        swapIdx = secondChildIdx;
      } else swapIdx = firstChildIdx;
      if (array[currentIdx].num > array[swapIdx].num) {
        this.swap(currentIdx, swapIdx, array);
        currentIdx = swapIdx;
        firstChildIdx = currentIdx * 2 + 1;
      } else return;
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let removeVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removeVal;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, arr) {
    let ele = arr[j];
    arr[j] = arr[i];
    arr[i] = ele;
  }
}

// Another solution to solve thos problem

function mergeSortedArrays(arrays) {
  let elementIdx = new Array(arrays.length).fill(0);

  let resultArr = [];
  while (true) {
    let smallestItem = [];
    for (let i = 0; i < arrays.length; i++) {
      let subArr = arrays[i];
      let eleIdx = elementIdx[i];
      if (eleIdx === subArr.length) continue;
      smallestItem.push({ i, num: subArr[eleIdx] });
    }
    if (smallestItem.length === 0) break;
    const nextItem = getMinValue(smallestItem);
    resultArr.push(nextItem.num);
    elementIdx[nextItem.i]++;
  }

  return resultArr;
}

function getMinValue(arr) {
  let minIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].num < arr[minIdx].num) minIdx = i;
  }

  return arr[minIdx];
}
