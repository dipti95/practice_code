function multiStringSearch(bigString, smallStrings) {
  let trie = new suffixTrie(bigString);

  for (let i = 0; i < smallStrings.length; i++) {
    if (trie.contains(smallStrings[i])) {
      smallStrings[i] = true;
    } else smallStrings[i] = false;
  }
  return smallStrings;
}

class suffixTrie {
  constructor(string) {
    this.root = {};
    this.buildSuffixTrie(string);
  }

  buildSuffixTrie(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertString(string.slice(i));
    }
  }

  insertString(string) {
    let obj = this.root;

    for (let ele of string) {
      if (!ele in obj) obj[ele] = {};
      obj = obj[ele];
    }
  }

  contains(string) {
    let obj = this.root;
    for (let ele of string) {
      if (!(ele in obj)) return false;
      obj = obj[ele];
    }
    return true;
  }
}
