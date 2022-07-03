//BruteForce solution  and time Complexity will be O(n * m)  where n is the length of row and m is length of column

function searchInSortedMatrix(matrix: number[][], target: number) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return [i, j]
    }
  }
  return [-1, -1]
}

// Its given that row and col are sorted

function searchInSortedMatrix(matrix: number[][], target: number) {
  let row = 0
  let col = matrix[0].length - 1

  while (col >= 0 && row < matrix.length) {
    if (target < matrix[row][col]) col--
    else if (target > matrix[row][col]) row++
    else return [row, col]
  }

  return [-1, -1]
}
