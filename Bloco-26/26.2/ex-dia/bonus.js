const readline = require('readline-sync');
const fs = require('fs').promises;

const arquivo = readline.question('Qual arquivo você deseja ler? ');

const readFileFunc = async (arquivo) => {
  try {
    const result = await fs.readFile(`${arquivo}.txt`, 'utf-8');
    console.log(result);
  } catch (error) {
    console.log('Arquivo inexistente');
};
};

readFileFunc(arquivo);
