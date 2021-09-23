const readline = require('readline-sync');

const height = readline.questionInt('Qual sua altura em cm?');
const weight = readline.questionFloat('Qual seu peso em kg?');

const imcCalculator = (height, weight) => {
  const imc = (weight/ Math.pow(height / 100, 2)).toFixed(2);
  console.log(`O seu IMC é: ${imc}`);
};

imcCalculator(height, weight);
