/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root)[0]
}

function dfs(root: TreeNode | null) {
  if (root === null) return [true, 0]

  let left = dfs(root.left)
  let right = dfs(root.right)

  let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

  return [balanced, 1 + Math.max(left[1], right[1])]
}
