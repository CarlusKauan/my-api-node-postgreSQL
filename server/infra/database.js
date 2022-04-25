const pgp = require('pg-promise')();
const db = pgp({
    user: '', 
    password: '', 
    host: '', 
    port: '',
    database: ''
});

module.exports = db;


