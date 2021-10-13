const express = require('express');
const errorMiddleware = require('./middlewares/error');


const User = require('./controllers/User');

const app = express();

app.use(express.json());

app.get('/user', User.getAllUsers);
app.get('/user/:id', User.getUserById);
app.put('/user/:id', User.updateUserInfos);
app.post('/user', User.insertUser);

app.use(errorMiddleware);

const PORT = 3000

app.listen(PORT, () => { console.log(`Ouvindo na porta${ PORT }`); });
