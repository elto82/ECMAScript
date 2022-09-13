// se declara
class User {}

//se instancia

//const newUser = new User();

class user {
  //methos

  greeting() {
    return "hello";
  }
}

const elto = new user();
console.log(elto.greeting());
const developer = new user();
console.log(developer.greeting());

// constructor

class user {
  //constructor
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "hello";
  }
}

const david = new user();

//this

class user {
  constructor(name) {
    this.name = name
  }
  speak () {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setter getters

class user {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    return 'Hello';
  }
  greeting () {
    return `${this.speak()} ${this.name}`
  }
  get uAge(){
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}
