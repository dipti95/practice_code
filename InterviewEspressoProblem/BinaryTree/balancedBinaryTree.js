function isBalanced(root) {
  if (root === null) return true;

  let leftCount = getDepth(root.left);
  let rightCount = getDepth(root.right);

  let heightDiff = Math.abs(leftCount - rightCount);
  return heightDiff <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

function getDepth(node) {
  if (node === null) return 0;

  return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
}
