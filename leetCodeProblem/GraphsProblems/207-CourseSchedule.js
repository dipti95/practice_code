var canFinish = function (numCourses, prerequisites) {
  let hash = {}
  let course = 0

  for (let i = 0; i < prerequisites.length; i++) {
    if (prerequisites[i][0] in hash)
      hash[prerequisites[i][0]].push(prerequisites[i][1])
    else hash[prerequisites[i][0]] = [prerequisites[i][1]]
  }

  while (course < numCourses) {
    if (!hash[course]) hash[course] = []
    course++
  }

  console.log(hash, course)

  let visited = {}

  function dfs(crs) {
    if (visited[crs]) return false
    if (hash[crs] === []) return true
    visited[crs] = true

    for (let val of hash[crs]) {
      if (!dfs(val)) return false
    }
    visited[crs] = false
    hash[crs] = []

    return true
  }

  course = 0
  while (course < numCourses) {
    if (!dfs(course)) return false
    course++
  }

  return true
}
