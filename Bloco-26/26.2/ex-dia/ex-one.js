const calculate = (numberOne, numberTwo, numberThree) => {
  return new Promise((resolve, reject) => {
    if(typeof numberOne !== 'number' || typeof numberTwo !== 'number' || typeof numberThree !== 'number') reject(new Error ("Informe apenas números"));
    const result = ((numberOne + numberTwo) * numberThree);
    if(result < 50) reject(new Error ("Valor muito baixo"));
    resolve(result);
  });
};

module.exports = calculate;
