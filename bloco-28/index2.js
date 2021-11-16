const express = require('express');
const process = require('process');

const app = express()

const PORT = 3001

app.get('/', (req, res) => {
  res.send(`Meu novo id de pprocesso é ${process.pid}`)})

app.get('/bug', (req, res) => {
  res.send('Deu pau')
  process.exit(0)
})

app.listen(PORT, () => {
  console.log(`Rodando por aqui => ${PORT}`)
})
