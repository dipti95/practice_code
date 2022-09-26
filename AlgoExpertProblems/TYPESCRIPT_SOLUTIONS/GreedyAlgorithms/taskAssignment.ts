function taskAssignment(k: number, tasks: number[]) {
  let res: [number, number][] = []
  let sortedTasks = [...tasks].sort((a, b) => a - b)
  let hash: { [key: number]: number[] } = {}

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] in hash) hash[tasks[i]].push(i)
    else hash[tasks[i]] = [i]
  }

  let left = 0
  let right = sortedTasks.length - 1

  while (k) {
    let idx1 = hash[sortedTasks[left]].pop()!
    let idx2 = hash[sortedTasks[right]].pop()!

    res.push([idx1, idx2])
    left++
    right--
    k--
  }

  return res
}
