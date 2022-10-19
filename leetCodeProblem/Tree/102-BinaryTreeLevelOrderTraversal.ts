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

function levelOrder(root: TreeNode | null): number[][] {
  let queue = [root]

  let res: number[][] = []

  while (queue.length) {
    let len = queue.length
    let level = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node) {
        level.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (level.length) res.push(level)
  }

  return res
}
