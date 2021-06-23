function lengthOfLongestSubstring(s) {
    let longestSubstring = ''
    let currentSubstring = '';
    for (const ele of s) {
        let index = currentSubstring.indexOf(ele);
        if (index !== -1) {
            if (currentSubstring.length > longestSubstring.length) longestSubstring = currentSubstring;
            currentSubstring = currentSubstring.slice(index + 1) + ele;

        } else currentSubstring += ele;
    }
    if (currentSubstring.length > longestSubstring.length) longestSubstring = currentSubstring
    return longestSubstring.length
}
let s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))