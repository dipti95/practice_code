function coinChange(coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;

  for (let coin of coins) {
    for (let i = 1; i < arr.length; i++) {
      if (coin <= i) {
        let diff = i - coin;
        arr[i] = Math.min(arr[i], arr[diff] + 1);
      }
    }
  }
  if (arr[amount] === Infinity) return -1;
  return arr[amount];
}
