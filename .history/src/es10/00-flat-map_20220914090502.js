const array = [2,4,6,7,8,[9,8,7,6,[1,3,5,7]]];
//console.log(array.flat(3));
console.log(array.flat(2));
/* 
result
[
  2, 4, 6, 7, 8, 9,
  8, 7, 6, 1, 3, 5,
  7
]

 */

// flatmap