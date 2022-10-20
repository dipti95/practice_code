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

function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = []
  let queue: TreeNode[] = [root]

  while (queue.length) {
    let rightView: TreeNode | null = null
    let len = queue.length

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      if (node) {
        rightView = node
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (rightView) res.push(rightView.val)
  }
  return res
}
