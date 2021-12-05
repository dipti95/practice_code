function rob(root) {
  function helper(node) {
    if (!node) return [0, 0];
    const [lr, ln] = helper(node.left);
    const [rr, rn] = helper(node.right);
    return [node.val + ln + rn, Math.max(lr + rr, ln + rn, lr + rn, ln + rr)];
  }

  return Math.max(...helper(root));
}
