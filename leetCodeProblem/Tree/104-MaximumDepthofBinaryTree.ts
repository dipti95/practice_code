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
