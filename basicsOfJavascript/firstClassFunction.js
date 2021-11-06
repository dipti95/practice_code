const myFunc = (name) => {
  console.log(`Hello ${name}`);
};

const getOtherFunc = (name) => {
  return myFunc(name);
};

getOtherFunc("Bob");
