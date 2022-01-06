//return type of value without using typeof method

function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
