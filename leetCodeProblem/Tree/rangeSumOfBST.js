function rangeSumBST(root, low, high) {
  let sum = 0;
  if (root === null) return sum;
  if (root.val > low) sum += rangeSumBST(root.left, low, high);
  if (root.val <= high && root.val >= low) sum += root.val;
  if (root.val < high) sum += rangeSumBST(root.right, low, high);

  return sum;
}
