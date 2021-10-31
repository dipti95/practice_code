// Valid parenthesis
// Author Dipti Yadav
function validParen(str) {
  let openParen = "({[";
  //let closeParen = ")}]";
  let hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let ele of str) {
    if (openParen.includes(ele)) stack.push(ele);
    else {
      if (stack.length === 0) return false;
      else if (hash[ele] === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }
  if (stack.length === 0) return true;
  else return false;
}
//
//
