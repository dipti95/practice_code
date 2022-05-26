class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

function minHeightBst(array) {
  return helperMinHeightBST(null, array, 0, array.length - 1)
}

function helperMinHeightBST(bst, array, minIdx, maxIdx) {
  if (minIdx > maxIdx) return
  let midIdx = Math.floor((minIdx + maxIdx) / 2)
  if (bst === null) {
    bst = new BST(array[midIdx])
  } else bst.insert(array[midIdx])

  helperMinHeightBST(bst, array, minIdx, midIdx - 1)
  helperMinHeightBST(bst, array, midIdx + 1, maxIdx)
  return bst
}
