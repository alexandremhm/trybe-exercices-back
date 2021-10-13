const express = require('express');
const validateCep = require('./middlewares/validateCep');

const Cep = require('./controllers/Cep.js');

const app = express();

app.use(express.json());

app.get('/ping', Cep.getPing);

app.get('/cep/:cep', Cep.getCep);

app.post('/cep', validateCep, Cep.insertCep);
    
app.get('/cep', Cep.getAllCeps);

const PORT = 3000

app.listen(PORT, () => { console.log(`Ouvindo na porta${ PORT }`); });
