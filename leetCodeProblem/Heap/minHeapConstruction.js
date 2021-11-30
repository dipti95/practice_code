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
      this.shiftDown(i, array.length - 1, array);
    }
    return array;
  }

  peek() {
    return this.heap[0];
  }
}
