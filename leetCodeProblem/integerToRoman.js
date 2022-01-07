let obj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
function intToRoman(num) {
  let result = "";
  while (num) {
    for (let i = 0; i < Object.values(obj).length; i++) {
      if (num >= Object.values(obj)[i]) {
        result += Object.keys(obj)[i];
        num -= Object.values(obj)[i];
        break;
      }
    }
  }
  return result;
}
