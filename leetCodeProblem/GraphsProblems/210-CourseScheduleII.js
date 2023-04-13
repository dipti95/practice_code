var findOrder = function (numCourses, prerequisites) {
  let hash = {}

  for (let val of prerequisites) {
    if (val[0] in hash) hash[val[0]].push(val[1])
    else hash[val[0]] = [val[1]]
  }

  let course = 0

  while (course < numCourses) {
    if (!hash[course]) hash[course] = []
    course++
  }

  // console.log(hash)

  let order = []
  let visited = {}

  function dfs(crs) {
    if (visited[crs]) return false
    if (hash[crs].length === 0) {
      if (!order.includes(crs)) order.push(crs)
      return true
    }
    visited[crs] = true

    for (let val of hash[crs]) {
      if (!dfs(val)) return false
    }
    visited[crs] = false
    hash[crs] = []
    order.push(crs)

    return true
  }

  course = 0

  while (course < numCourses) {
    if (!dfs(course)) return []
    course++
  }

  return order
}
