// without using BinarySearchTree construction

function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length)
    return false
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true
  let leftArrOne = leftBst(arrayOne)
  let rightArrOne = rightBst(arrayOne)
  let leftArrTwo = leftBst(arrayTwo)
  let rightArrTwo = rightBst(arrayTwo)
  // recursive solution to find out every left and right tree are same or not
  return sameBsts(leftArrOne, leftArrTwo) && sameBsts(rightArrOne, rightArrTwo)
}

function leftBst(array: Array<number>) {
  return array.filter((ele) => {
    if (ele < array[0]) return ele
  })
}

function rightBst(array: Array<number>) {
  return array.filter((ele, i) => {
    if (ele >= array[0] && i !== 0) return ele
  })
}
