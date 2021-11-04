function depth(root) {
  if (root === null) return 0;
  let leftDepth = depth(root.left);
  let rightDepth = depth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
