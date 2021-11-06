const outside = () => {
  const number = 21;
  const insideFunc = () => console.log(`My fav number is ${number}`);
  return insideFunc;
};

const getOtherFunc = outside();
getOtherFunc();
