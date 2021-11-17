// dynamic pragramming

const uniquePaths = (m, n) => {
  const dummyArray = new Array(m + 1).fill(0);
  for (let i = 0; i < dummyArray.length; i++) {
    dummyArray[i] = new Array(n + 1).fill(1);
  }

  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dummyArray[row][col] =
        dummyArray[row + 1][col] + dummyArray[row][col + 1];
    }
  }

  return dummyArray[1][1];
};
