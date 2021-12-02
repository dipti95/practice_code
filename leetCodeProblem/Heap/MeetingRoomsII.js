function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let meetingRoom = 1;
  let firstInterval = [intervals[0]];
  let heap = new MinHeap(firstInterval);

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];

    if (heap.peek()[1] <= currentInterval[0]) heap.remove();
    else meetingRoom++;

    heap.insert(currentInterval);
  }

  return meetingRoom;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
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
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    swap(0, this.heap.length - 1, this.heap);
    let removeVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removeVal;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}
