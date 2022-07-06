interface Obj {
  [key: number]: Array<number>
}

function validTree(n: number, edges: number[][]): boolean {
  if (n === 0) return true

  const adjacent: Obj = {}
  const visited: Array<number> = []
  for (let i = 0; i < n; i++) {
    adjacent[i] = []
  }
  for (const val of edges) {
    const [n1, n2] = val
    adjacent[n1].push(n2)
    adjacent[n2].push(n1)
  }

  return dfs(0, -1, visited, adjacent) && visited.length === n
}

function dfs(
  node: number,
  prevNode: number,
  visited: Array<number>,
  adjacent: Obj
): boolean {
  if (visited.includes(node)) return false
  visited.push(node)

  for (const ele of adjacent[node]) {
    if (ele === prevNode) continue
    if (!dfs(ele, node, visited, adjacent)) return false
  }

  return true
}
