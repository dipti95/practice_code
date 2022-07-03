function numberOfWaysToMakeChange(n: number, denoms: Array<number>) {
  let arr: Array<number> = new Array(n + 1).fill(0)
  arr[0] = 1

  for (const val of denoms) {
    for (let i = 1; i <= n; i++) {
      if (val <= i) {
        arr[i] += arr[i - val]
      }
    }
  }
  return arr[arr.length - 1]
}
