function levelOrder(root) {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;
    let arr = [];
    while (size > 0) {
      let item = queue.shift();
      arr.push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
      size -= 1;
    }
    result.push(arr);
  }
  return result;
}
