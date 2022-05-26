class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateBst(tree) {
  return isBinarySearchTree(tree, Infinity, -Infinity)
}

function isBinarySearchTree(tree, max, min) {
  if (tree === null) return true
  if (tree.value < min || tree.value >= max) return false
  return (
    isBinarySearchTree(tree.left, tree.value, min) &&
    isBinarySearchTree(tree.right, max, tree.value)
  )
}
