function generateParenthesis(n: number): string[] {
  let stack: string[] = []
  let res: string[] = []

  function backTracking(open, closed) {
    if (open === n && closed === n) {
      res.push(stack.join(""))
      return
    }
    if (open < n) {
      stack.push("(")
      backTracking(open + 1, closed)
      stack.pop()
    }

    if (closed < open) {
      stack.push(")")
      backTracking(open, closed + 1)
      stack.pop()
    }
  }

  backTracking(0, 0)

  return res
}
