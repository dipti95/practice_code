function numIslands(grid: string[][]): number {
  let visited: Array<Array<boolean>> = grid.map((ele) =>
    ele.map((val) => false)
  )

  let num: number = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        areaOfIsland(i, j, grid, visited)
        num++
      } else visited[i][j] = true
    }
  }

  return num
}

function areaOfIsland(
  i: number,
  j: number,
  grid: Array<Array<string>>,
  visited: Array<Array<boolean>>
) {
  if (visited[i][j]) return
  visited[i][j] = true

  if (grid[i][j + 1] === "1") areaOfIsland(i, j + 1, grid, visited)
  if (grid[i][j - 1] === "1") areaOfIsland(i, j - 1, grid, visited)
  if (grid[i - 1] && grid[i - 1][j] === "1")
    areaOfIsland(i - 1, j, grid, visited)
  if (grid[i + 1] && grid[i + 1][j] === "1")
    areaOfIsland(i + 1, j, grid, visited)
}
