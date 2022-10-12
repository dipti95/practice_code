function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// another solution=> easy to understand

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0

  return dfs(root)
}

function dfs(root) {
  let leftHeight = maxDepth(root.left)
  let rightHeight = maxDepth(root.right)

  let maxHeight = Math.max(leftHeight, rightHeight)

  return maxHeight + 1
}

//Using bfs without recursion
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  let depth = 0

  let queue = [root]

  while (queue.length > 0) {
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    depth++
  }

  return depth
}
