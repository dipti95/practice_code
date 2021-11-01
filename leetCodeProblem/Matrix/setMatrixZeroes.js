function setMatrix(matrix) {
  let solve = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        solve.push(i);
        solve.push(j);
      }
    }
  }

  //   console.log(solve);

  for (let i = 0; i < solve.length; i++) {
    for (let j = 0; j < matrix[solve[i]].length; j++) {
      matrix[solve[i]][j] = 0;
    }
    for (let k = 0; k < matrix.length; k++) {
      matrix[k][solve[i + 1]] = 0;
    }
    i++;
  }
}

// let matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
// console.log(setMatrix(matrix));
