const express = require('express');

const app = express();

app.use(express.json())

const validationRouter = require('./validationRoute');

app.use('/btc', validationRouter);

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });
