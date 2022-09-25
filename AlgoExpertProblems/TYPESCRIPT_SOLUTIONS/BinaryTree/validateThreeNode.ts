class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
  let search1: BST | null = nodeOne
  let search2: BST | null = nodeThree

  while (true) {
    if (search1 === null && search2 === null) break
    if (search1 === nodeThree || search2 === nodeOne) break
    if (search1 === nodeTwo || search2 === nodeTwo) break

    if (search1 !== null) {
      if (search1.value > nodeTwo.value) search1 = search1.left
      else search1 = search1.right
    }
    if (search2 !== null) {
      if (search2.value > nodeTwo.value) search2 = search2.left
      else search2 = search2.right
    }
  }

  let foundNodeFromOther = search1 === nodeThree || search2 === nodeOne

  let foundNodeTwo = search1 === nodeTwo || search2 === nodeTwo
  if (!foundNodeTwo || foundNodeFromOther) {
    return false
  }

  if (search1 === nodeTwo) {
    return search(nodeTwo, nodeThree)
  } else {
    return search(nodeTwo, nodeOne)
  }
}

function search(node: BST | null, target: BST) {
  while (node && node !== target) {
    if (node.value > target.value) node = node.left
    else node = node.right
  }

  return node === target
}
