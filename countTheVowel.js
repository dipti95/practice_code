// By Recursion

function countTheVowel(str) {
  let vowel = "aeiouAEIOU";
  if (str.length === 0) return 0;
  return vowel.includes(str[0]) + countTheVowel(str.slice(1));
}
