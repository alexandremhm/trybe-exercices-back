const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: "pong" }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  age > 17 && res.status(200).json({ "name": name, "age": age })
  age <= 17 && res.status(401).json({"message": "Unauthorized"})
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.get('/simpsons', rescue(async (req, res) => {
  const simpsonsArr = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsonsArr);
}))

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsonsArr = await simpsonsUtils.getSimpsons();
  const simpson = simpsonsArr.find(simpson => simpson.id === id);
  res.status(200).json(simpson);
}))

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsonsArr = await simpsonsUtils.getSimpsons();
  const simpson = simpsonsArr.some(simpson => Number(simpson.id) === Number(id));
  if(simpson) {
    res.status(409).json({ "message": "id already exists" });
    return
  }
  const newSimpson = await simpsonsUtils.setSimpsons([...simpsonsArr, { id, name }]);
  res.status(204).end();
}))

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
