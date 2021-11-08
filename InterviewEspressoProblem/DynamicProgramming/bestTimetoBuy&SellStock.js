function maxProfit(prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (min > prices[i]) min = prices[i];
  }
  return max;
}
