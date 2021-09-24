const calculate = require('./ex-one');

const randomOne = Math.floor(Math.random() * 100 + 1);
const randomTwo = Math.floor(Math.random() * 100 + 1);
const randomThree = Math.floor(Math.random() * 100 + 1);

calculate(randomOne, randomTwo, randomThree)
  .then((result) => { 
    console.log(result)
  })
  .catch((err) => {
    console.log(`error: ${err}`)
  })
