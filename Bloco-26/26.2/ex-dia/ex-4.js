const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

// const printCharacters = async () => {
//   try{
//     await fs.readFile("./simpsons.json", 'utf8')
//       .then((data) => {
//         return JSON.parse(data)
//       })
//       .then((data) => {
//         return data.map(({ id, name }) => console.log(`${id} - ${name}`))
//       })
//     }
//     catch(err) {
//       console.error(`Não foi possível ler o arquivo "./simpsons.json"\n Erro: ${err}`);
//       process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//     };
// }

// printCharacters();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const searchCharacter = async (idCharacter) => {
  try {
    await fs.readFile("./simpsons.json", 'utf8')
    .then((data) => {
      return JSON.parse(data)
    })
    .then((data) => {
      return data.find(({ id }) => id == idCharacter)
    })
    .then(({ id, name }) => {
      console.log(`${id} - ${name}`)
    })
  } 
  catch(err) {
    console.error("id não encontrado");
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  };
};

// searchCharacter(1)

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const modifyOriginalFile = async () => {
//  const data = await fs.readFile("./simpsons.json", 'utf8');
//  const parseData = JSON.parse(data);
//  const newArray = await parseData.filter(({ id }) => id !== '10' && id !== '6')
//  await fs.writeFile("./simpsons.json", JSON.stringify(newArray))
// }

// modifyOriginalFile()

//  Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// const createNewFile = async () => {
//  const data = await fs.readFile("./simpsons.json", 'utf8');
//  const parseData = JSON.parse(data);
//  const newArray = await parseData.filter(({ id }) => ['1', '2', '3', '4'].includes(id))
//  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newArray))
// }

// createNewFile()

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// const addNewCharacter = async () => {
//  const data = await fs.readFile("./simpsonFamily.json", 'utf8');
//  const parseData = JSON.parse(data);
//  const newCharacter = {
//    id: 5,
//    name: 'Nelson Muntz'
//  }
//  const newArray = [...parseData, newCharacter]
//  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newArray))
// }

// addNewCharacter();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

// const changeCharacter = async () => {
//  const data = await fs.readFile("./simpsonFamily.json", 'utf8');
//  const parseData = JSON.parse(data);

//  const newArray = parseData.reduce((acc, { name, id }) => {
//   name === 'Nelson Muntz' ? acc.push({ id: 5, name: 'Maggie Simpson'}) : acc.push({ id, name, })
//   return acc
//  }, [])
 
//  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newArray))
// }

// changeCharacter();


