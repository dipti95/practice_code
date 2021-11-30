function findKthLargest(nums, k) {
  buildMaxHeap(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    swap(0, i, nums);
    siftDown(0, i - 1, nums);
  }

  return nums[nums.length - k];
}

function buildMaxHeap(array) {
  let firstParentIdx = Math.floor((array.length - 2) / 2);

  for (let i = firstParentIdx; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
  return array;
}

function siftDown(currentIdx, endIdx, heap) {
  let firstChildIdx = 2 * currentIdx + 1;

  while (firstChildIdx <= endIdx) {
    let secondChildIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
    let swapIdx = 0;
    if (currentIdx != -1 && heap[secondChildIdx] > heap[firstChildIdx]) {
      swapIdx = secondChildIdx;
    } else swapIdx = firstChildIdx;

    if (heap[swapIdx] > heap[currentIdx]) {
      swap(currentIdx, swapIdx, heap);
      currentIdx = swapIdx;
      firstChildIdx = currentIdx * 2 + 1;
    } else return;
  }
}

function swap(i, j, arr) {
  let ele = arr[i];
  arr[i] = arr[j];
  arr[j] = ele;
}
