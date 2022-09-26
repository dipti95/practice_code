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

function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  //O(n)

  let milesLeft = 0
  let minGas = 0
  let minCity = 0
  // starting from 1 because we aready set the value of milesLeft,minGas and minCity.
  for (let city = 1; city < distances.length; city++) {
    //fuel[city-1] => fuel of prev city
    //distances[city-1] => distance covered from prev city
    milesLeft += mpg * fuel[city - 1] - distances[city - 1]
    if (milesLeft < minGas) {
      minGas = milesLeft
      minCity = city
    }
  }

  return minCity
}
