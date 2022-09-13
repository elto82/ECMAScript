// arrays destructuring

let fruits = ['Banana', 'Apple']
let [a, b] = fruits
console.log(a, b);
console.log(b,fruits[0]);

// Object destructuring

let user = { userName: 'Pedro', age: 35};
let {userName, age} = user
console.log(userName, age);