function minEatingSpeed(piles: number[], h: number): number {
  let k = 1
  let max = Math.max(...piles)
  if (piles.length === h) {
    return max
  }

  while (k < max) {
    const mid = Math.floor((k + max) / 2)
    let hours = 0
    for (const pile of piles) {
      hours += Math.ceil(pile / mid)
    }
    if (hours > h) {
      k = mid + 1
    } else {
      max = mid
    }
  }

  return k
}
