const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'alexandremhm',
    password: 'alexandremhm',
    database: 'cep_lookup',
    port: 3306 
});

module.exports = connection;
