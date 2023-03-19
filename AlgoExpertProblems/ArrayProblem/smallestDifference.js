function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let idx1 = 0
  let idx2 = 0
  let temp = Infinity
  let smallestDiff = Infinity
  let smallestDiffPair = []

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    const arrayOneNum = arrayOne[idx1]
    const arrayTwoNum = arrayTwo[idx2]

    if (arrayOneNum < arrayTwoNum) {
      temp = arrayTwoNum - arrayOneNum
      idx1++
    } else if (arrayOneNum > arrayTwoNum) {
      temp = arrayOneNum - arrayTwoNum
      idx2++
    } else return [arrayOneNum, arrayTwoNum]

    if (smallestDiff > temp) {
      smallestDiff = temp
      smallestDiffPair = [arrayOneNum, arrayTwoNum]
    }
  }
  return smallestDiffPair
}
