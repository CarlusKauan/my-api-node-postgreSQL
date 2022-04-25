const database = require('../infra/database');

exports.getPorts = function () {
    return database.query('select * from pet.post');
};

exports.savePost = function (post) {
    return database.one('insert into pet.post (nome, dono, raca, idade) values ($1, $2, $3, $4) returning *', [post.nome, post.dono, post.raca, post.idade]);
};

exports.deletePost = function (id) {
    return database.none('delete from pet.post where id = $1', [id]);
};