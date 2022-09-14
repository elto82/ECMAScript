const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Async!!"), 5000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('hiiiiiiiiii!');
}

console.log('before');
anotherFn();
console.log('after');

/*
result
before
after
Async!!
hiiiiiiiiii! 
*/