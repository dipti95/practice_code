function longestPalindrome(string) {
  let longest = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let subStr = string.slice(i, j + 1);
      if (longest.length < subStr.length && isPalindrome(subStr)) {
        longest = subStr;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// better way to solve this

function longestPalindrome(s) {
  let current = [0, 1];
  for (let i = 1; i < s.length; i++) {
    let odd = palindrome(s, i - 1, i + 1);
    let even = palindrome(s, i - 1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    current =
      current[1] - current[0] > longest[1] - longest[0] ? current : longest;
  }
  return s.slice(current[0], current[1]);
}

function palindrome(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
