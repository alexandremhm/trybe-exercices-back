const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createNewFiles = (array) => {
    Promise.all([
      fs.writeFile('file1.txt'),
      fs.writeFile('file2.txt'),
      fs.writeFile('file3.txt'),
      fs.writeFile('file2.txt'),
      fs.writeFile('file3.txt'),
    ])
    

  }
  