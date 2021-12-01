class suffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      insertString(string.slice(i));
    }
  }

  insertString(string) {
    let obj = this.root;
    for (let ele of string) {
      if (!(ele in obj)) obj[ele] = {};
      obj = obj[ele];
    }
    obj[this.endSymbol] = true;
  }
  contains(string) {
    let obj = this.root;
    for (let ele of string) {
      if (!(ele in obj)) return false;
      obj = obj[ele];
    }
    return this.endSymbol in obj;
  }
}
