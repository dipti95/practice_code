function isSubtree(root, subRoot) {
  if (!root) return !subRoot;
  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

function isEqual(node, subNode) {
  if (!node || !subNode) return !node && !subNode;
  if (node.val !== subNode.val) return false;
  return isEqual(node.left, subNode.left) && isEqual(node.right, subNode.right);
}
