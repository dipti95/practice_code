//Solution without using dfs and bfs
// brute force solution

function removeIslands(matrix: number[][]) {
  let visited: Array<Array<boolean>> = matrix.map((ele) =>
    ele.map((val) => false)
  )

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!visited[i][j] && matrix[i][j] === 1) {
        if (
          i === 0 ||
          i === matrix.length - 1 ||
          j === 0 ||
          j === matrix[0].length - 1
        )
          coverArea(i, j, matrix, visited)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!visited[i][j] && matrix[i][j] === 1) matrix[i][j] = 0
    }
  }
  return matrix
}

function coverArea(
  i: number,
  j: number,
  matrix: Array<Array<number>>,
  visited: Array<Array<boolean>>
) {
  if (visited[i][j]) return
  visited[i][j] = true

  if (matrix[i][j + 1] === 1) coverArea(i, j + 1, matrix, visited)
  if (matrix[i][j - 1] === 1) coverArea(i, j - 1, matrix, visited)
  if (matrix[i - 1] && matrix[i - 1][j] === 1)
    coverArea(i - 1, j, matrix, visited)
  if (matrix[i + 1] && matrix[i + 1][j] === 1)
    coverArea(i + 1, j, matrix, visited)
}
