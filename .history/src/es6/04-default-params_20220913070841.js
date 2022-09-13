// antes
function newUser (name, age, country) {
  var name = name || 'Antonio'
  var age = age || 40
  var country = country || 'Colombia'
  console.log(name, age, country);
}

newUser();
newUser('Argiro', 41, 'Mexico')

//ahora

function newAdmin (name = 'Juan', age = 30, country = 'cl') {
  console.log(name, age, country);
}

newAdmin()
newAdmin('Lucia', 25, 'CO')