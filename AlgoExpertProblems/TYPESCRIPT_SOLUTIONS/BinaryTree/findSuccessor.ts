class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
  parent: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  const arr = inOrderTraversal(tree)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== node) continue
    if (i === arr.length - 1) return null
    else return arr[i + 1]
  }
}

// left - root - right
function inOrderTraversal(
  tree: BinaryTree | null,
  arr: Array<BinaryTree> = []
) {
  if (tree !== null) {
    inOrderTraversal(tree.left, arr)
    arr.push(tree)
    inOrderTraversal(tree.right, arr)
  }

  return arr
}
