async function* anotherGenerator () {
  yield await Promise.resolve(1)
}