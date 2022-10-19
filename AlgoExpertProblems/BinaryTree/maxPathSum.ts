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

export function maxPathSum(tree: BinaryTree) {
  const res = maxPathSumHelper(tree)

  return res[1]
}

function maxPathSumHelper(tree: BinaryTree | null) {
  //-Infinity because maxPathSum can be negative
  if (tree === null) return [0, -Infinity]

  const [leftMaxSumBranch, leftMaxSum] = maxPathSumHelper(tree.left)
  const [rightMaxSumBranch, rightMaxSum] = maxPathSumHelper(tree.right)

  const maxChildSum = Math.max(leftMaxSumBranch, rightMaxSumBranch)

  const maxSumBranch = Math.max(maxChildSum + tree.value, tree.value)
  const maxSumRoot = Math.max(
    maxSumBranch,
    leftMaxSumBranch + rightMaxSumBranch + tree.value
  )

  let maxPathSum = Math.max(leftMaxSum, rightMaxSum, maxSumRoot)

  return [maxSumBranch, maxPathSum]
}
