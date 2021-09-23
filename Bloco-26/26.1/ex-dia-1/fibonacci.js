const readline = require('readline-sync');
const num = readline.questionInt('Insira um número: ');

// const fibonacci = (number) => {

//   if(number <= 2) {
//     return (number - 1)
//   } else {
//     return (fibonacci(number - 1) + fibonacci(number - 2))
//   }
// }

// function fibonacci(number) {
//   return number < 1 ? 0
//        : number <= 2 ? 1
//        : fibonacci(number - 1) + fibonacci(number - 2);
// }

// console.log(fibonacci(4));

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(num))
