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

// // Crie um arquivo index.js que pergunta qual script deve ser executado
// // e executa o script escolhido.
// const fs = require("fs");
// const exec = require("child_process").exec;
// const read = require("readline-sync");
// ​
// // https://heynode.com/tutorial/readwrite-json-files-nodejs/
// fs.readFile("./package.json", "utf-8", (err, jsonString) => {
//   if (err) {
//     console.log("Erro ao ler o arquivo package.json", err);
//   } else {
//     console.log("Leitura de package.json realizada com sucesso!");
//     const npm_json = require("./package.json");
// ​
//     // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
//     const scripts = Object.keys(npm_json.scripts).join(", ");
//     console.log(
//       "\x1b[31m",
//       `Scripts disponíveis: ${scripts}`
//     );
//     const whichScript = read.question(
//       "Dos scripts acima, qual você quer executar?\n"
//     );
// ​
//     // https://stackoverflow.com/questions/59629553/is-it-possible-to-run-npm-script-from-javascript/59629758
//     const cmd = exec(`npm run ${scripts.includes(whichScript) ? whichScript : 'erro'}`, (err, stdout, stderr) => {
//       if (err) {
//         console.log("Erro ao executar o script", err);
//       } else {
//         console.log(stdout);
//       }
//     });
//   }
// });

scriptToRun();
