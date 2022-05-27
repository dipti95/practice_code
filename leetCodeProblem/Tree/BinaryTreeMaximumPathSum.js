/*            -10
            /    \
           9      20
                 /  \
               15    7
  Maximum Path of this tree is 42 => 20+15+7

               */
const maxPathSum = function (root) {
  if (!root) return 0
  let maximumPath = -Infinity
  helper(root)
  function helper(tree) {
    if (!tree) return 0

    let leftSum = Math.max(0, helper(tree.left))
    let rightSum = Math.max(0, helper(tree.right))
    let sum = tree.val + leftSum + rightSum
    maximumPath = Math.max(maximumPath, sum)
    return tree.val + Math.max(leftSum, rightSum)
  }

  return maximumPath
}
