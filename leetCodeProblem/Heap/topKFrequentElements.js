function topKFrequent(nums, k) {
  let obj = {};
  let arr = [];
  for (let ele of nums) {
    if (ele in obj) obj[ele] += 1;
    else obj[ele] = 1;
  }

  let value = Object.values(obj);
  let heap = new MaxHeap(value);

  let hash = {};

  for (let i = 0; i < k; i++) {
    let ele = heap.remove();
    for (let key in obj) {
      if (obj[key] === ele && !(key in hash)) {
        arr.push(key);
        hash[key] = true;
        break;
      }
    }
  }

  console.log(arr);
  return arr;
}

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let FirstParentNodeIdx = Math.floor((array.length - 2) / 2);

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

  remove() {
    // removing root node ;
    swap(0, this.heap.length - 1, this.heap);
    let removeVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removeVal;
  }
}

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}
