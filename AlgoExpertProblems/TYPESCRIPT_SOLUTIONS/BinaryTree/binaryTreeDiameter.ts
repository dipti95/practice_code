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

class TreeInfo {
  diameter: number
  height: number
  constructor(diameter: number, height: number) {
    this.diameter = diameter
    this.height = height
  }
}

function binaryTreeDiameter(tree: BinaryTree) {
  return getMaxDiameter(tree).diameter
}

function getMaxDiameter(tree: BinaryTree | null): TreeInfo {
  if (!tree) return new TreeInfo(0, 0)

  const leftTreeInfo = getMaxDiameter(tree.left)
  const rightTreeInfo = getMaxDiameter(tree.right)

  const longestHeight = leftTreeInfo.height + rightTreeInfo.height
  const MaxDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)

  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height)
  const currentDiameter = Math.max(longestHeight, MaxDiameter)

  return new TreeInfo(currentDiameter, currentHeight)
}
