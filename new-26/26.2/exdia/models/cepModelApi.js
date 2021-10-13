const axios = require('axios');

const urlGenerate = (cep) => `https://viacep.com.br/ws/${cep}/json/ `;


const apiRequest = async (cep) => {
  try {
    const url = urlGenerate(cep);
    const response = await axios.get(url);
    return response.data;
  }
  catch (error) {
    return error;
  }
};

module.exports = {
  apiRequest,
}
