const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./routes/userRoutes');

app.use('/user', userRouter);

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

const PORT = 3000

app.listen(PORT, () => { console.log(`Ouvindo na porta${ PORT }`); });
