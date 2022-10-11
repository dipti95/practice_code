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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const temp: TreeNode | null = root.left
  root.left = root.right
  root.right = temp

  //recursively calling root.left and root.right
  invertTree(root.left)
  invertTree(root.right)

  return root
}
//Iterative solution
// using queue
function invertTree(root: TreeNode | null): TreeNode | null {
  let queue: Array<TreeNode | null> = [root]

  while (queue.length !== 0) {
    let node = queue.shift()
    if (node === null) continue

    queue.push(node.left)
    queue.push(node.right)

    let temp = node.left
    node.left = node.right
    node.right = temp
  }

  return root
}
