function deleteNode(root, key) {
  if (!root) return null;
  if (root.val === key) {
    if (!root.left) return root.left;
    if (!root.right) return root.right;
    let currentVal = root.right;
    while (currentVal.left) currentVal = currentVal.left;
    currentVal.left = root.left;
    return root.right;
  }
  if (key < root.val) root.left = deleteNode(root.left, key);
  else root.right = deleteNode(root.right, key);
  return root;
}
