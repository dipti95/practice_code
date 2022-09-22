function carFleet(target: number, position: number[], speed: number[]): number {
  let hash: { [key: number]: number } = {}

  for (let i = 0; i < position.length; i++) {
    hash[position[i]] = speed[i]
  }

  let key = Object.keys(hash)
  let stack: number[] = []

  for (let i = key.length - 1; i >= 0; i--) {
    let time = (target - Number(key[i])) / hash[key[i]]

    stack.push(time)
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop()
    }
  }

  return stack.length
}
