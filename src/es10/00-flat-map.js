
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
const array2 = [1,2,3,4,5,6,7]
console.log(array2.flatMap(v => [v, v * 2]));
/* 
result
[
  1,  2, 2,  4, 3,  6,
  4,  8, 5, 10, 6, 12,
  7, 14
]
*/
