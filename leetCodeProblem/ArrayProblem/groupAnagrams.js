/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
**/

// function groupAnagram(strs) {
//     let hash = {}
//     for (const ele of strs) {
//         const str = [...ele].sort().join('');
//         if (!hash[str]) hash[str] = [];
//         hash[str].push(ele)
//     }
//     return Object.values(hash)
// }

// one more way
// useful in other question also;

function groupAnagram(strs) {
  let hash = {}
  for (const ele of strs) {
    // define new array of length of alphabets
    const charCount = new Array(26).fill(0)
    for (let char of ele) {
      // after that we have to cheak where that character found and plus count by one
      // so , by this if the ele have anagram in nature they have same character count array
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++
    }
    //after that if that charCount is not then we have to equate with empty array
    // because we want array into array
    //output should be like that in given question
    //  -----Output: [["bat"],["nat","tan"],["ate","eat","tea"]]  ------
    if (!hash[charCount]) hash[charCount] = []
    hash[charCount].push(ele)
  }
  // we return value in hash because key is the charCount
  // in this case we found 3 different type of charCount
  return Object.values(hash)
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagram(strs))

var groupAnagrams = function (strs) {
  let hash = {}

  let dummy = strs.map((ele) => ele.split("").sort().join(""))

  for (let i = 0; i < dummy.length; i++) {
    if (dummy[i] in hash) hash[dummy[i]].push(strs[i])
    else hash[dummy[i]] = [strs[i]]
  }

  return Object.values(hash)
}
