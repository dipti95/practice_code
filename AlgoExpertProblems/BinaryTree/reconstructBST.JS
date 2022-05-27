class BST {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// preOrderTraversalValues is a array => root - left - right

function reconstructBst(preOrderTraversalValues) {
  // base case for recursive call
  if (!preOrderTraversalValues.length) return null

  const rootValue = preOrderTraversalValues[0]
  let rightIdx = preOrderTraversalValues.length
  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    if (preOrderTraversalValues[i] >= rootValue) {
      rightIdx = i
      break
    }
  }
  let leftNode = reconstructBst(preOrderTraversalValues.slice(1, rightIdx))
  let rightNode = reconstructBst(preOrderTraversalValues.slice(rightIdx))
  return new BST(rootValue, leftNode, rightNode)
}
