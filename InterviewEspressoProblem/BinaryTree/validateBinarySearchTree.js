function isValidBST(root) {
  let min = -Infinity;
  let max = Infinity;
  return isValid(root, min, max);
}

function isValid(root, min, max) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  );
}
