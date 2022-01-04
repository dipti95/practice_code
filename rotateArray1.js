const rotateArray = (originalArray, rotateNum) => {
  let result = [];
  if (rotateNum > 0) {
    for (
      let i = originalArray.length - rotateNum;
      i < originalArray.length;
      i++
    )
      result.push(originalArray);
    for (let i = 0; i < originalArray.length - rotateNum; i++)
      result.push(originalArray[i]);
  } else {
    for (let i = -rotateNum; i < originalArray.length; i++)
      result.push(originalArray[i]);
    for (let i = 0; i < -rotateNum; i++) result.push(originalArray[i]);
  }
  return result;
};
