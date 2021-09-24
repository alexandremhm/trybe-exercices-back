const readline = require("readline-sync");

const randomNumberGenerator = () => {
  return parseInt(Math.random() * 10);
};

const lotery = () => {
  const randomNumber = randomNumberGenerator();
  const numberInput = readline.questionInt("Insira um número de 0 a 10: ");

  if (numberInput === randomNumber) {
    return console.log("Parabéns, número correto!");
  }
  console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
};

const doYouWantToPlayAgain = () => {
  return (answer = readline.keyInYN("Gostaria de jogar novamente?"));
};

const playGame = () => {
  lotery();
  const booleanResponse = doYouWantToPlayAgain();

  if (booleanResponse) {
    playGame();
  } else {
    console.log("Ok, até mais!!!");
  }
};

playGame();

module.exports = { playGame }
