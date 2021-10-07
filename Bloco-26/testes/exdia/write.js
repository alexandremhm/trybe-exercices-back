const fs = require('fs');

const escreveArquivo = (nomeDoArquivo, data) => {
  
  fs.writeFileSync(nomeDoArquivo, data)
  return 'ok';    
}

// escreveArquivo('./matheus.txt', 'ola')

module.exports = escreveArquivo;
