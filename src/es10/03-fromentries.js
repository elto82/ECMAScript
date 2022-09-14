const entries = new Map([['name', 'oscar'], ['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));
/* 
result 
Map(2) { 'name' => 'oscar', 'age' => 34 }
{ name: 'oscar', age: 34 }

 */