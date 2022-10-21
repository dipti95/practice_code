// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function goodNodes(root: TreeNode | null): number {
  return dfs(root, root.val)
}

function dfs(node: TreeNode | null, maxVal: number): number {
  if (node === null) return 0

  let res
  if (node.val >= maxVal) res = 1
  else res = 0

  maxVal = Math.max(maxVal, node.val)

  res += dfs(node.left, maxVal)
  res += dfs(node.right, maxVal)

  return res
}
