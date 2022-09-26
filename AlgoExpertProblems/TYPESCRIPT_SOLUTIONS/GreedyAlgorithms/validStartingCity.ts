function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  //O(n2)
  let len = distances.length

  for (let city = 0; city < len; city++) {
    let miles = 0

    for (let startCity = city; startCity < city + len; startCity++) {
      if (miles < 0) break
      let rotatedIdx = startCity % len

      miles += fuel[rotatedIdx] * mpg - distances[rotatedIdx]
    }
    if (miles >= 0) return city
  }

  return -1
}
