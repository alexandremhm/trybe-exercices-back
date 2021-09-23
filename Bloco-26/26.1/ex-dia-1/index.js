const readline = require("readline-sync");

const scriptToRun = () => {
  const numberInput = readline.questionInt("Insira o numero do script desejado (1- IMC / 2- Velocidade / 3- Sorteio): ");

  if(numberInput === 1) {
    const imc = require('./imc');
    imc();
  } else if (numberInput === 2) {
    const velocidade = require('./velocidade');
    velocidade();
  } else if (numberInput === 3) {
    const sorteio = require('./sorteio');
    sorteio()
  } else {
    console.log('insira um numero de 1 a 3')
    scriptToRun()
  }
}

scriptToRun();
