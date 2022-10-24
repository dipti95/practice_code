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
//  recursive solution
function kthSmallest(root: TreeNode | null, k: number): number {
  let res: number[] = []
  bfs(root, res)

  return res[k - 1]
}

function bfs(node: TreeNode | null, arr: number[]) {
  if (node === null) return

  bfs(node.left, arr)
  arr.push(node.val)
  bfs(node.right, arr)

  return arr
}

//Iterative solution
function kthSmallest(root: TreeNode | null, k: number): number {
  let n = 0
  let stack: TreeNode[] = []

  let current = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    n += 1
    if (n === k) return current.val

    current = current.right
  }
}
