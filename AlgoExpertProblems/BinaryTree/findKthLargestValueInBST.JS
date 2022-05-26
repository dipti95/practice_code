class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function findKthLargestValueInBst(tree, k) {
  let arr = inOrderTraversal(tree, [])
  return arr[arr.length - k]
}
// In inOrderTraversal => left-root-right;
function inOrderTraversal(tree, array) {
  if (tree !== null) {
    inOrderTraversal(tree.left, array)
    array.push(tree.value)
    inOrderTraversal(tree.right, array)
  }
  return array
}
