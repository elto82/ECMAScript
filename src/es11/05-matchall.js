const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, kiwi, orange, Apple, etc,etc, etc.'

for (const match of fruits.matchAll(regex)){
  console.log(match);
}
/* 
result 
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, kiwi, orange, Apple, etc,etc, etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 29,
  input: 'Apple, Banana, kiwi, orange, Apple, etc,etc, etc.',
  groups: undefined
]

 */