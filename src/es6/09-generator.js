function* iterate(array) {
  for (let value of array) {
    yield value
  }
}

const it = iterate(['oscar','juan','lucia','ana','luis ']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);