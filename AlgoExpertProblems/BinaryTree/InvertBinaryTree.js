class BinaryTree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
// By Breadth First Search
function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length !== 0) {
    let currentVal = queue.shift();
    let left = currentVal.left;
    let right = currentVal.right;
    swap(currentVal);
    queue.push(left);
    queue.push(right);
  }
}

function swap(currentTree) {
  let temp = currentTree.right;
  currentTree.right = currentTree.left;
  currentTree.left = temp;
}
