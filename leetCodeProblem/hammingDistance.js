function hammingDistance(x, y) {
  let value = x ^ y;
  let counter = 0;

  while (value != 0) {
    if (value & 1) ++counter;

    value = value >> 1;
  }

  return counter;
}
// ^ XOR reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
// one line solution;
function hammingDistance(x, y) {
  return Number(x ^ y)
    .toString(2)
    .split("")
    .reduce((a, b) => +a + +b);
}
