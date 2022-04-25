const postsData = require('../data/PostsData')

exports.getPorts = function () {
    return postsData.getPorts();
};

exports.getPost = function (id) {
	return postsData.getPost(id);
};

exports.savePost = function (post) {
    return postsData.savePost(post);
};

exports.deletePost = function (id) {
    return postsData.deletePost(id);
};

exports.updatePost = function (id, post) {
    return postsData.updatePost(id, post);
};

