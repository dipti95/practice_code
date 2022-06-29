//  1st solution
function calculateTime(keyboard: string, word: string): number {
  const arr: Array<number> = [0]
  let totalTime: number = 0

  for (const ele of word) {
    let index = keyboard.indexOf(ele)
    arr.push(index)
  }

  for (let i = 1; i < arr.length; i++) {
    totalTime += Math.abs(arr[i] - arr[i - 1])
  }

  return totalTime
}
