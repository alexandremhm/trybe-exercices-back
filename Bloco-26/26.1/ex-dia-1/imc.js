const readline = require('readline-sync');

const height = readline.questionInt('Qual sua altura? ');
const weight = readline.questionInt('Qual seu peso? ');

const imcCalculator = (height, weight) => {
  const imc = height/ (weight * weight)
  console.log(`O seu IMC é: ${imc}`);
};

imcCalculator(height, weight);
