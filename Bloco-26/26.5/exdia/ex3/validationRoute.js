const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');
const axios = require('axios');
const cors = require('cors');

const validateToken = require('./validateToken');

const app = express();

app.use(cors());

router.post(
  '/price', validateToken,
  rescue(async (_req, res) => {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json)')    
    res.status(200).json(response.data);
  })
);

app.use(function (err, _req, res, _next) { 
  res.status(500).json({ error: `Erro: ${err.message}` });
});


module.exports = router;