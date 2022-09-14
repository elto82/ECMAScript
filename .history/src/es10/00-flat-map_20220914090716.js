
//flat
const array = [2,4,6,7,8,[9,8,7,6,[1,3,5,7]]];
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
const array2 = [1,2,3,4,5,6,7 ]