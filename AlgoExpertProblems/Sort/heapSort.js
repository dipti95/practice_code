function heapSort(array) {
  buildMaxHeap(array);
  // Root value of MAX HEAP Is always maximum
  for (let i = array.length - 1; i > 0; i--) {
    swap(0, i, array);
    siftDown(0, i - 1, array);
  }
  return array;
}

function buildMaxHeap(array) {
  // formula to find parent node is
  // parentNode = Math.floor((index of given child node -1)/2)
  let FirstParentNodeIdx = Math.floor((array.length - 2) / 2);
  // Hear we are finding the parent node of last children node
  for (let i = FirstParentNodeIdx; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
  return array;
}
function siftDown(currentIdx, endIdx, heap) {
  let firstChidIdx = 2 * currentIdx + 1;

  while (firstChidIdx <= endIdx) {
    let secondChildIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
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

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}
