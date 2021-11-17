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

// we can do recursive solution also;
const uniquePaths = (m, n) => {
  return getCount(m, n, 1, 1);
};
function getCount(m, n, row, col) {
  if (row === m && col === n) return 1;
  if (row > m && col > n) return 0;

  let pathRight = getCount(m, n, row, col + 1);
  let pathDown = getCount(m, n, row + 1, col);
  return pathDown + pathRight;
}
