const myFunc = (name) => {
  console.log(`Hello ${name}`);
};

const arr = ["Alberto", "Bruno", "Luca"];
const anotherFunc = (index, callback) => {
  if (index > arr.length - 1) {
    console.log(`Index ${index} does not exist`);
  } else {
    setTimeout(function () {
      const name = arr[index];
      callback(name);
    }, 1000);
  }
};
//anotherFunc(3,myFunc)
anotherFunc(2, myFunc);
