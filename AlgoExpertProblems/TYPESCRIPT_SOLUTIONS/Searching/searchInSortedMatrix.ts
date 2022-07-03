//BruteForce solution  and time Complexity will be O(n * m)  where n is the length of row and m is length of column

function searchInSortedMatrix(matrix: number[][], target: number) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return [i, j]
    }
  }
  return [-1, -1]
}
