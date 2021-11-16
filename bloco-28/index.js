const express = require('express');
const process = require('process');

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send(`Meu Id do processo é ${process.pid} ${process.env.SECRET || process.env.ENVIRONMENT}show` )
})

app.get('/bug', (req, res) => {
  res.send('Deu pau')
  process.exit(0)
})

app.listen(PORT, () => {
  console.log(`Rodando por aqui => ${PORT}`)
})