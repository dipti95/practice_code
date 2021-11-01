function sameTree(p, q) {
  //p  and q are given tree
  if (p === null && q === null) return true;

  if (p === null || q === null || p.val !== q.val) return false;

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}
