function isValidSudoku(board: string[][]): boolean {
  let cols: { [key: number]: { [key: number]: boolean } } = {}
  let rows: { [key: number]: { [key: number]: boolean } } = {}
  let squares: { [key: number]: { [key: number]: boolean } } = {}

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue

      if (!rows[r]) {
        rows[r] = {}
      }
      if (!cols[c]) {
        cols[c] = {}
      }
      if (!squares[`${Math.floor(r / 3)},${Math.floor(c / 3)}`]) {
        squares[`${Math.floor(r / 3)},${Math.floor(c / 3)}`] = {}
      }

      if (
        board[r][c] in rows[r] ||
        board[r][c] in cols[c] ||
        board[r][c] in squares[`${Math.floor(r / 3)},${Math.floor(c / 3)}`]
      )
        return false

      rows[r][board[r][c]] = true
      cols[c][board[r][c]] = true
      squares[`${Math.floor(r / 3)},${Math.floor(c / 3)}`][board[r][c]] = true
    }
  }

  return true
}
