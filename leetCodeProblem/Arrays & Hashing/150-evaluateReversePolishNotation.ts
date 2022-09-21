function evalRPN(tokens: string[]): number {
  let stack: number[] = []

  for (let ele of tokens) {
    if (ele === "+") {
      let num1 = stack.pop()
      let num2 = stack.pop()
      stack.push(num2 + num1)
    } else if (ele === "-") {
      let num1 = stack.pop()
      let num2 = stack.pop()
      stack.push(num2 - num1)
    } else if (ele === "*") {
      let num1 = stack.pop()
      let num2 = stack.pop()
      stack.push(num2 * num1)
    } else if (ele === "/") {
      let num1 = stack.pop()
      let num2 = stack.pop()
      stack.push(Math.trunc(num2 / num1))
    } else stack.push(Number(ele))
  }

  return stack.pop()
}
