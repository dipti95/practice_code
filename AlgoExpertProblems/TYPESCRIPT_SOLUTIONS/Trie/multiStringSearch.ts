interface TrieNode {
  [key: string]: TrieNode | boolean
}

class SuffixTrie {
  root: TrieNode
  endSymbol: string

  constructor(string: string) {
    this.root = {}
    this.endSymbol = "*"
    this.populateSuffixTrie(string)
  }

  populateSuffixTrie(string: string) {
    for (let i = 0; i < string.length; i++) {
      this.insert(i, string)
    }
  }

  insert(i: number, string: string) {
    let node = this.root

    for (let j = i; j < string.length; j++) {
      if (!(string[j] in node)) {
        node[string[j]] = {}
      }

      node = node[string[j]] as TrieNode
    }
    node[this.endSymbol] = true
  }

  contains(string: string) {
    let node = this.root

    for (const str of string) {
      if (!(str in node)) return false
      node = node[str] as TrieNode
    }

    return true
  }
}

function multiStringSearch(bigString: string, smallStrings: string[]) {
  const trie = new SuffixTrie(bigString)
  let result: boolean[] = []

  for (let i = 0; i < smallStrings.length; i++) {
    if (trie.contains(smallStrings[i])) {
      result[i] = true
    } else result[i] = false
  }
  return result
}
