function spiralMatrix(matrix) {
  let arr = [];
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let row = startCol; row <= endCol; row++) {
      arr.push(matrix[startRow][row]);
    }
    for (let col = startRow + 1; col <= endRow; col++) {
      arr.push(matrix[col][endCol]);
    }
    for (let row = endCol - 1; row >= startCol; row--) {
      if (startRow === endRow) break;
      arr.push(matrix[endRow][row]);
    }
    for (let col = endRow - 1; col > startRow; col--) {
      if (startCol === endCol) break;
      arr.push(matrix[col][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return arr;
}
