function maxDepth(root) {
  if (root === null) return;
  else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
  }
}
