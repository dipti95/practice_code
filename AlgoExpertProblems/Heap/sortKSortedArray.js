function sortKSortedArray(array, k) {
  // Hear we are doing Math.min because if k+1 would be beyond the array.length than we want array.length . otherwise after k+1 the value will be undefined;
  let heap = new MinHeap(array.slice(0, Math.min(k + 1, array.length)));
  /* For Example we have array = [3,2,1,5,4,7,6,5]  k =3;
     
     [3 , 2 , 1 , 5 , 4 , 7 , 6 , 5]
      |   |   |   |   |   |   |   |
index 0   1   2   3   4   5   6   7

So, hear in example heap is from 0 to k+1(4)
  with the help of  Minheap construction 
  value of heap =[1,2,3,5]
  MIN HEAP PROPERTY => ROOT NODE would be SMALLEST value of Heap;
  That's why after for loop first action is to remove the lowestvalue in the heap 
  IN MIN HEAP  CONSTRUCTION  REMOVE METHOD REMOVE THE ROOT VALUE OF HEAP;

 */
  let nextIdx = 0;

  /*  With the help of above comments now it is understandable that why  we are taking i = k+1
  because after removing the value and set that remove value  to the nextIdx (which i define above In the start nextIdx is always zero)of array 
   */

  for (let i = k + 1; i < array.length; i++) {
    let minElement = heap.remove();
    array[nextIdx] = minElement;
    nextIdx += 1;

    let currentElement = array[i];
    /**  In the first iteration i= k+1  so we look to the given array => array[k+1] => 4
       SO, hear we are inserting the values from k+1 to the length of the array
      */
    heap.insert(currentElement);
  }

  /* In case if heap is not empty than we are doing same process in this while loop*/

  while (!heap.isEmpty()) {
    let minElement = heap.remove();
    array[nextIdx] = minElement;
    nextIdx += 1;
  }
  return array;
}

// Heap construction ;
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
      if (secondChildIdx !== -1 && heap[secondChildIdx] < heap[firstChildIdx]) {
        swapIdx = secondChildIdx;
      } else {
        swapIdx = firstChildIdx;
      }
      if (heap[swapIdx] < heap[currentIdx]) {
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
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length === 0;
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
