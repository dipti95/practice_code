function wordBreak(s, wordDict) {
  let trie = new Trie();
  let result = false;
  let memo = {};

  wordDict.forEach((word) => trie.insertWord(word, trie));

  const handleString = (str, trie) => {
    if (!str.length) {
      return (result = true);
    } else if (result || !trie || str in memo) {
      return;
    }
    memo[str] = "checked";
    let current = trie;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];

      if (!current || !current.keys[letter] || result) {
        return;
      } else if (current.keys[letter].isWord && !result) {
        handleString(str.slice(i + 1), trie);
      }
      current = current.keys[letter];
    }
  };

  handleString(s, trie);
  return result;
}

//Trie construction
class Trie {
  keys = {};
  isWord = false;
  constructor(keys = {}, isWord = false) {
    this.keys = keys;
    this.isWord = isWord;
  }

  insertWord(word, trie) {
    if (!word.length) return;
    let letter = word[0];
    if (!trie.keys[letter]) {
      trie.keys[letter] = new Trie();
    }
    let newWord = word.slice(1);
    if (!newWord.length) {
      trie.keys[letter].isWord = true;
    } else {
      this.insertWord(newWord, trie.keys[letter]);
    }
  }
}
