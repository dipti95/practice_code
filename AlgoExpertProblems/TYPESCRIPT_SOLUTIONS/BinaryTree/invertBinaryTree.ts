class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

//Breadth first search
function invertBinaryTree(tree: BinaryTree | null) {
  let queue: Array<BinaryTree | null> = [tree]

  while (queue.length !== 0) {
    // after queue.shift  => "!"  why ?????
    const nodeFromTop = queue.shift()!
    if (nodeFromTop === null) continue
    swap(nodeFromTop)
    queue.push(nodeFromTop.left)
    queue.push(nodeFromTop.right)
  }
}

function swap(tree: BinaryTree) {
  const right = tree.right
  tree.right = tree.left
  tree.left = right
}
