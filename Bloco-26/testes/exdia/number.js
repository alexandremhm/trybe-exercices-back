const numberClassificator = (number) => {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  } else if (number < 0) {
    return 'negativo';
  } else if (number === 0) {
    return 'neutro';
  } else if (number > 0) {
    return 'positivo';
  } 
};

module.exports = numberClassificator;
