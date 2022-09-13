const anotherFuntion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("ok");
    } else {
      reject("Whooops");
    }
  });
};
