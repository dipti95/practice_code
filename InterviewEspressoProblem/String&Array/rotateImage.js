function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      console.log(temp);
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
}
