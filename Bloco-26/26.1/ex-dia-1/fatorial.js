const readline = require('readline-sync');
const number = readline.questionInt('Insira um número: ');

const calculaFatorial = (number) => {
  let actualNumber = number - 1;

  if(actualNumber > 0) {
    return number * calculaFatorial(actualNumber)
  } 
  if(actualNumber === 0) {
    return 1
  }
};

console.log(calculaFatorial(number));
