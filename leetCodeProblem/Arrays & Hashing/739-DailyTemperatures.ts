function dailyTemperatures(temperatures: number[]): number[] {
  let result: number[] = Array(temperatures.length).fill(0)
  let stack = []

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length !== 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const [val, idx] = stack.pop()
      result[idx] = i - idx
    }

    stack.push([temperatures[i], i])
  }

  return result
}
