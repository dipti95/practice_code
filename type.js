//return type of value without using typeof method

function type(value) {
  //Object.prototype.toString.call(value)
  //return the [Object typeOfValue]
  // that's why slice 8 , -1
  return Object.prototype.toString.call(value).slice(8, -1);
}
