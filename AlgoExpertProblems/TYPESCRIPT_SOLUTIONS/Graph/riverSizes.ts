function riverSizes(matrix: number[][]) {
  let visited: Array<Array<boolean>> = matrix.map((ele) =>
    ele.map((val) => false)
  )

  let riverSizesArr: Array<number> = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //if(visited[i][j]) continue;
      if (matrix[i][j] === 1 && !visited[i][j]) {
        let size = getRiverSizes(i, j, matrix, visited, 0)
        riverSizesArr.push(size)
      } else visited[i][j] = true
    }
  }
  return riverSizesArr
}

function getRiverSizes(
  i: number,
  j: number,
  matrix: Array<Array<number>>,
  visited: Array<Array<boolean>>,
  size: number
) {
  if (visited[i][j]) return size
  size++
  visited[i][j] = true

  if (matrix[i][j + 1] === 1)
    size = getRiverSizes(i, j + 1, matrix, visited, size)
  if (matrix[i][j - 1] === 1)
    size = getRiverSizes(i, j - 1, matrix, visited, size)
  if (matrix[i - 1] && matrix[i - 1][j] === 1)
    size = getRiverSizes(i - 1, j, matrix, visited, size)
  if (matrix[i + 1] && matrix[i + 1][j] === 1)
    size = getRiverSizes(i + 1, j, matrix, visited, size)

  return size
}
