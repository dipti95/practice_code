function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let maxLength = num1.length + num2.length;
  let result = Array(maxLength).fill(0);
  for (let i = num2.length - 1; i >= 0; i--) {
    let opIdx = maxLength - (num2.length - i);
    for (let j = num1.length - 1; j >= 0; j--) {
      const product =
        result[opIdx] + parseInt(num1.charAt(j)) * parseInt(num2.charAt(i));
      result[opIdx] = Math.floor(product % 10);
      result[opIdx - 1] = Math.floor(product / 10) + result[opIdx - 1];
      opIdx--;
    }
  }
  if (result[0] === 0) return result.slice(1).join("");
  else return result.join("");
}
