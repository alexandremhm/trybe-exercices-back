const readline = require('readline-sync');

const height = readline.questionInt('Qual sua altura em cm?');
const weight = readline.questionFloat('Qual seu peso em kg?');

const imcCalculator = (height, weight) => {
  const imc = (weight/ Math.pow(height / 100, 2)).toFixed(2);
  console.log(`O seu IMC é: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
};

imcCalculator(height, weight);

module.exports = { imcCalculator }

// npm start
