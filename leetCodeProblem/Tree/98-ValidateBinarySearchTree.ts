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

function isValidBST(root: TreeNode | null): boolean {
  return dfs(root, -Infinity, Infinity)
}

function dfs(node: TreeNode | null, left: number, right: number) {
  if (node === null) return true
  if (node.val <= left || node.val >= right) return false

  return dfs(node.left, left, node.val) && dfs(node.right, node.val, right)
}
