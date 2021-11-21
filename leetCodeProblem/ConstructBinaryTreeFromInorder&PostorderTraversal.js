var buildTree = function (inorder, postorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

  function recur(start, end) {
    if (start > end) return null;
    let val = postorder.pop();
    let root = new TreeNode(val);
    let idx = hash[val];
    root.right = recur(idx + 1, end);
    root.left = recur(start, idx - 1);
    return root;
  }

  return recur(0, inorder.length - 1);
};
