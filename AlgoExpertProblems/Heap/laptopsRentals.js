/** 
 Given => time interval of individual student [start, end]
 0<= start< end  . however start& end don't represent the actual time 
 so, they may be greter than 24;
 No, student can use laptop at the same time , but immediately after 
 a studentis done using laptop,another student can use that same laptop
 Minimun number of laptops that schoolneed to rent that 
 all the students will always accessto the laptop when they need 
 */

function laptopRentals(times) {
  if (times.length === 0) return 0;

  times.sort((a, b) => a[0] - b[0]);

  const firstInterval = [times[0]];
  const heap = new MinHeap(firstInterval);

  for (let i = 1; i < times.length; i++) {
    const currentInterval = times[i];

    if (heap.peek()[1] <= currentInterval[0]) heap.remove();

    heap.insert(currentInterval);
  }

  return firstInterval.length;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let parentNodeIdx = Math.floor((array.length - 2) / 2);
    for (let i = parentNodeIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let firstChildIdx = currentIdx * 2 + 1;
    while (firstChildIdx <= endIdx) {
      let secondChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let swapIdx = 0;
      if (
        secondChildIdx !== -1 &&
        heap[secondChildIdx][1] < heap[firstChildIdx][1]
      ) {
        swapIdx = secondChildIdx;
      } else {
        swapIdx = firstChildIdx;
      }
      if (heap[swapIdx][1] < heap[currentIdx][1]) {
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
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
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
