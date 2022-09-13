// enhanced object literals

function newUser (user, age, country){
  return {
    user,
    age,
    country,
    id: uId,
  }    
}
console.log(newUser('elto',20,'CO',1));