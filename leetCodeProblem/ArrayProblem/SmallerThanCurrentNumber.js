const smallerNumbersThanCurrent = function (nums) {
  let result = [];

  let sortNums = [...nums].sort((a, b) => a - b);
  for (let ele of nums) {
    result.push(sortNums.indexOf(ele));
  }
  return result;
};
