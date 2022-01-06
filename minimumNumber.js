//By recursion

function min(arr) {
  if (arr.length === 0) return arr[0];
  return Math.min(arr[0], min(arr.slice(1)));
}
