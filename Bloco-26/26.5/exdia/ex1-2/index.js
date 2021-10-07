const express = require('express');

const app = express();

app.use(express.json())

const userRouter = require('./userRouter');

app.use('/user', userRouter);

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });
