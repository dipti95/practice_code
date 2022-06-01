class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
function branchSums(root) {
  let resultArr = []
  helperBranchSum(root, resultArr, 0)
  console.log(resultArr)
  return resultArr
}

function helperBranchSum(tree, arr, sum) {
  if (!tree) return

  sum += tree.value
  if (tree.left === null && tree.right === null) {
    arr.push(sum)
    return
  }

  helperBranchSum(tree.left, arr, sum)
  helperBranchSum(tree.right, arr, sum)
}
