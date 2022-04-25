function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:")
  numbers.forEach(function (number) {
    //O(n)
    console.log(number) //O(n)
  })

  console.log("and these are their sums:")
  numbers.forEach(function (firstNumber) {
    //O(n)
    numbers.forEach(function (secondNumber) {
      //O(n)
      console.log(firstNumber + secondNumber) //O(n)
    })
  })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

//BIG O -(n+n^2) => we can choose dominant one
// So, BIG-O will be (n^2)
