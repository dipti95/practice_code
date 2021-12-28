function numSquares(n) {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    if (isPerfect(i)) {
      arr.push(i);
    }
  }

  return dp(n, arr);
}
function dp(n, arr, mem = {}) {
  if (n == 0) return 0;
  if (n < 0) return Infinity;

  if (mem[n] != undefined) return mem[n];

  let min = Infinity;
  arr.forEach((e) => {
    min = Math.min(dp(n - e, arr, mem) + 1, min);
  });
  return (mem[n] = min);
}

function isPerfect(num) {
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (i * i === num) return true;
  }
  return false;
}
