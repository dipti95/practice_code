/** 
Inorder: <LEFT><ROOT><RIGHT>, 
postorder: <LEFT><RIGHT><ROOT>
The LAST ELEMENT of POSTORDER will always be the ROOT of a subtree. 
We can furter determine its left and right subtree 
by finding its position in the inorder array.
*/

function buildTree(inorder, postorder) {
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
}
