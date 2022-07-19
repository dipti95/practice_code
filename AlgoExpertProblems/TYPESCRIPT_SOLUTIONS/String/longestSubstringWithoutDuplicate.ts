//O(n*n) time

function longestSubstringWithoutDuplication(string: string) {
  let substring: string = ""
  for (let i = 0; i < string.length; i++) {
    let current: string = string[i]
    for (let j = i + 1; j < string.length; j++) {
      if (current.includes(string[j])) break
      current += string[j]
    }
    if (substring.length < current.length) substring = current
  }
  return substring
}

//O(n) time

longestSubstringWithoutDuplication(string: string) {
  
    let hash :{[key:string]:number}={}
    let start =0
    let longestSubstring =[0,1]
  
    for(let i =0;i< string.length;i++){
      if(string[i] in hash){
        start = Math.max(start, hash[string[i]]+1)
      }
      if(longestSubstring[1]-longestSubstring[0] < i+1 -start){
        longestSubstring=[start, i+1]
      }
  
      hash[string[i]]=i
    }
   return string.slice(longestSubstring[0], longestSubstring[1])
  }
  
