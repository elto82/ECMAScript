
var lastName = 'Arias';
lastName = 'cardona';
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
  if(true) {
    var fruit1 = 'apple';//funtion scope
    let fruit2 = 'kiwi';
    const fruit3 = 'banana';
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();