function maxProfit(prices: number[]): number {
  let left: number = 0
  let right: number = left + 1
  let maxProfit: number = 0

  while (right < prices.length) {
    let diff = prices[right] - prices[left]
    maxProfit = Math.max(maxProfit, diff)
    if (Math.sign(diff) === -1) {
      left = right
      right = left + 1
    } else right++
  }

  return maxProfit
}
