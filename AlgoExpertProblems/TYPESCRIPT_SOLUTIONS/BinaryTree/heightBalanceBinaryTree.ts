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

function heightBalancedBinaryTree(tree: BinaryTree) {
  return getHeight(tree).balance
}

function getHeight(tree: BinaryTree | null): TreeInfo {
  if (!tree) return new TreeInfo(true, 1)

  const leftInfo = getHeight(tree.left)
  const rightInfo = getHeight(tree.right)

  const isBalance =
    leftInfo.balance &&
    rightInfo.balance &&
    Math.abs(leftInfo.height - rightInfo.height) <= 1
  const currentHeight = 1 + Math.max(leftInfo.height, rightInfo.height)
  return new TreeInfo(isBalance, currentHeight)
}

class TreeInfo {
  balance: boolean
  height: number
  constructor(balance: boolean, height: number) {
    this.balance = balance
    this.height = height
  }
}
