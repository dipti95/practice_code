class TimeMap {
  hash: { [key: string]: [string, number][] }
  constructor() {
    this.hash = {}
  }

  set(key: string, value: string, timestamp: number): void {
    if (key in this.hash) {
      this.hash[key].push([value, timestamp])
    } else this.hash[key] = [[value, timestamp]]
  }

  get(key: string, timestamp: number): string {
    let result = ""
    let value = this.hash[key] ? this.hash[key] : []

    let left = 0
    let right = value.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (value[mid][1] <= timestamp) {
        result = value[mid][0]
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return result
  }
}
