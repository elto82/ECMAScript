// arrays destructuring

let fruits = ['Banana', 'Apple']
let [a, b] = fruits
console.log(a, b);
console.log(b,fruits[0]);

// Object destructuring

let user = { userName: 'Pedro', age: 35};
let {userName, age} = user
console.log(userName, age);
console.log(userName, user.age);

// Spread operator

let person = { name: 'Ana', age: 18};
let country = 'CO';
let data = {...person, country};
console.log(data);

// rest

function sum (num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num * values[0]
  return num + values
}

sum(2, 2, 3, 4);