function tournamentWinner(competitions, results) {
  let finalVal = {}
  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      if (competitions[i][1] in finalVal) finalVal[competitions[i][1]] += 1
      else finalVal[competitions[i][1]] = 1
    } else {
      if (competitions[i][0] in finalVal) finalVal[competitions[i][0]] += 1
      else finalVal[competitions[i][0]] = 1
    }
  }
  const values = Object.values(finalVal).sort((a, b) => a - b)
  const max = values[values.length - 1]
  return Object.keys(finalVal).filter((ele) => finalVal[ele] === max)[0]
}
