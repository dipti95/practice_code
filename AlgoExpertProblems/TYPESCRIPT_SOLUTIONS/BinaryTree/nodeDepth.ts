class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function nodeDepths(root: BinaryTree) {
  return helperNodeDepths(root, 0)
}

function helperNodeDepths(
  tree: BinaryTree | null,
  currentDepth: number
): number {
  if (!tree) return 0
  return (
    currentDepth +
    helperNodeDepths(tree.left, currentDepth + 1) +
    helperNodeDepths(tree.right, currentDepth + 1)
  )
}
