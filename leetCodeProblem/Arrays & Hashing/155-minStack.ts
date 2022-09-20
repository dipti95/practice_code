class MinStack {
  arr: Array<number>
  min: Array<number>

  constructor() {
    this.arr = []
    this.min = []
  }

  push(val: number): void {
    if (this.min[this.min.length - 1] > val || this.min.length === 0) {
      this.min.push(val)
    } else this.min.push(this.min[this.min.length - 1])
    this.arr.push(val)
  }

  pop(): void {
    this.arr.pop()
    this.min.pop()
  }

  top(): number {
    return this.arr[this.arr.length - 1]
  }

  getMin(): number {
    return this.min[this.min.length - 1]
  }
}
