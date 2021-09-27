const fs = require('fs').promises;

const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const createNewFiles = (array) => {
  return Promise.all(
    array.map((item, index) => {
      return fs.writeFile(`file${index + 1}.txt`, item);
    })
  );
}

const readFiles = (array) => {
  createNewFiles(array)
    .then((data) => {
      return Promise.all(
        data.map((_item, index) => {
          return fs.readFile(`file${index + 1}.txt`);
          })
      ).then((data) => {
        const fileSum = data.join(' ');
        return fs.writeFile('file-sum.txt', fileSum);
      })
    })  
}

readFiles(arr)
  