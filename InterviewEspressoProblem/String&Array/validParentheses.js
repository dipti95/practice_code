function validParentheses(str) {
  let open = "({[";
  let obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let ele of s) {
    if (open.includes(ele)) stack.push(ele);
    else {
      if (stack.length === 0) return false;
      else if (obj[ele] === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }

  if (stack.length === 0) return true;
  else return false;
}
