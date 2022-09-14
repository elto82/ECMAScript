const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("ok");
    } else {
      reject("Whooops");
    }
  });
};

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('Finnaly'))