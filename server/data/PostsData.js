const database = require('../infra/database');

exports.getPorts = function () {
    return database.query('select * from pet.post');
};
