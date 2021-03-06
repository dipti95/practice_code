function numTrees(n) {
  let arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j];
    }
  }
  return arr[n];
}

// recursive solution ;

function numTrees(n) {
  return factorial(2 * n) / (factorial(n + 1) * factorial(n));
}

function factorial(num) {
  if (num <= 0) return 1;
  else return num * factorial(num - 1);
}
