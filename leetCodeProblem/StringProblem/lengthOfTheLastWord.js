function lengthOfLastWord(s) {
  s = s.split(" ").filter((ele) => ele !== "");

  return s[s.length - 1].length;
}
