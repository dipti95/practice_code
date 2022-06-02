class Node {
  name: string
  children: Node[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array: string[]) {
    let queue: Array<Node | null> = [this]
    while (queue.length !== 0) {
      let node = queue.shift()!
      array.push(node.name)
      for (const child of node.children) {
        queue.push(child)
      }
    }
    return array
  }
}
