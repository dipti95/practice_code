function findComplement(num) {
  let maximum = 0;
  let power = 0;

  while (maximum < num) {
    maximum += Math.pow(2, power);

    power++;
  }

  return maximum - num;
}
