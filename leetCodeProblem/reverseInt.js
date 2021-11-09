function reverse(x) {
  let int = Math.abs(x);
  let result = 0;
  while (int > 0) {
    let num = int % 10;
    int = Math.floor(int / 10);
    result *= 10;
    result += num;
  }

  if (result > Math.pow(2, 31)) return 0;
  return result * Math.sign(x);
}
