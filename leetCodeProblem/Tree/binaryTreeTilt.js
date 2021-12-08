const findTilt = (root) => {
  let sum = 0;

  function getSum(node) {
    if (!node) return 0;
    let leftSum = getSum(node.left);
    let rightSum = getSum(node.right);
    let eleSum = leftSum + rightSum;
    sum += Math.abs(leftSum - rightSum);
    return eleSum + node.val;
  }

  getSum(root);

  return sum;
};
