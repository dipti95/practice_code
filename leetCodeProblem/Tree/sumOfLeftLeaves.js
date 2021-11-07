function sumOfLeftLeaves(root) {
  if (!root) return 0;
  let sum = 0;

  let traverse = (node) => {
    if (!node) return;
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    } else {
      traverse(node.left);
    }
    traverse(node.right);
  };

  traverse(root);
  return sum;
}
