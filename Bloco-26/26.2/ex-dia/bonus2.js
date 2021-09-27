const readline = require('readline-sync');
const fs = require('fs').promises;

const arquivo = readline.question('Qual arquivo você deseja ler? ');

const readFileFunc = async (arquivo) => {
  try {
    const result = await fs.readFile(`${arquivo}.txt`, 'utf-8');
    return result;
  } catch (error) {
    return console.log('Arquivo inexistente');
};
};



const replaceWord = async (arquivo) => {
  try {
    const result = await readFileFunc(arquivo);
    const wordToBeChanged = readline.question('Qual palavra você deseja substituir? ');
    const wordToChange = readline.question(`Qual palavra você deseja utilizar para sutbstituir a palavra ${wordToBeChanged}?  `);

    const wordChange =  await result.replace(new RegExp(wordToBeChanged, 'g'), wordToChange);
    const file = readline.question('Qual o nome do arquivo de destino? ');
    await fs.writeFile(file, wordChange);
  }
  catch (error) {
    return console.log(error);
  };
}; 

replaceWord(arquivo);