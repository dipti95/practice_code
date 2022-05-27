class BST {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// preOrderTraversalValues is a array => root - left - right
// time complexity O(n^2)  n is for recursive call and other n is for finding the rightIdx in preOrderTraversalValues
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

// Other Solution with less time complexity
// O(n)

class RootInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx
  }
}

function reconstructBst(preOrderTraversalValues) {
  let rootInfo = new RootInfo(0)

  return helperFunction(-Infinity, Infinity, rootInfo, preOrderTraversalValues)
}

function helperFunction(lowerVal, upperVal, rootInfo, array) {
  if (rootInfo.rootIdx === array.length) return null

  let rootVal = array[rootInfo.rootIdx]
  if (rootVal >= upperVal || rootVal < lowerVal) return null
  rootInfo.rootIdx++
  const leftNode = helperFunction(lowerVal, rootVal, rootInfo, array)
  const rightNode = helperFunction(rootVal, upperVal, rootInfo, array)
  return new BST(rootVal, leftNode, rightNode)
}
