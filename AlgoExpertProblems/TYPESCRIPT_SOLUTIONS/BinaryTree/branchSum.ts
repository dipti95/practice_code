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

function branchSums(root: BinaryTree): number[] {
  const resultArr: Array<number> = []

  helperSum(root, resultArr, 0)

  return resultArr
}

function helperSum(
  tree: BinaryTree | null,
  resultArr: Array<number>,
  sum: number
) {
  if (!tree) return
  sum += tree.value
  if (tree.left === null && tree.right === null) {
    resultArr.push(sum)
    return
  }

  helperSum(tree.left, resultArr, sum)
  helperSum(tree.right, resultArr, sum)
}
