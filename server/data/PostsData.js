const database = require('../infra/database');

exports.getPorts = function () {
    return database.query('select * from pet.post');
};

exports.getPost = function (id) {
	return database.oneOrNone('select * from pet.post where id = $1', [id]);
};

exports.savePost = function (post) {
    return database.one('insert into pet.post (nome, dono, raca, idade) values ($1, $2, $3, $4) returning *', [post.nome, post.dono, post.raca, post.idade]);
};

exports.updatePost = function (id, post) {
    return database.none('update pet.post set nome = $1, dono = $2, raca = $3, idade = $4 where id = $5', [post.nome, post.dono, post.raca, post.idade, id]);
};

exports.deletePost = function (id) {
    return database.none('delete from pet.post where id = $1', [id]);
};