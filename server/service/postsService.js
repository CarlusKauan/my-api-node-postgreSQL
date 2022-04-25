const postsData = require('../data/PostsData')

exports.getPorts = function () {
    return postsData.getPorts();
};

exports.savePost = function (post) {
    return postsData.savePost(post);
};

exports.deletePost = function (id) {
    return postsData.deletePost(id);
}

