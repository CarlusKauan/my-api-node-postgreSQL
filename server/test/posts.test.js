const crypto = require('crypto')
const axios = require('axios')
const postService = require('../service/postsService');

const generate = function () {
    return crypto.randomBytes(20).toString('hex')
};

const generateNumber = function () {
    return crypto.randomInt(20);
}

const request = function (url, method, data) {
    return axios({ url, method, data });
};

test('Should get posts', async function(){
    // given -> dado que 
    const post1 = await postService.savePost({ nome: generate(), dono: generate(), raca: generate(), idade: generateNumber()});
    const post2 = await postService.savePost({ nome: generate(), dono: generate(), raca: generate(), idade: generateNumber()});
    const post3 = await postService.savePost({ nome: generate(), dono: generate(), raca: generate(), idade: generateNumber()});
    // when -> quando acontecer
    const response = await request('http://localhost:3333/pets', 'get');
    const post = response.data;
    // then -> então
    expect(post).toHaveLength(3);
    await postService.deletePost(post1.id)
    await postService.deletePost(post2.id)
    await postService.deletePost(post3.id)
});

test('Should save posts', async function(){
    // given -> dado que 
    const data = { nome: generate(), dono: generate(), raca: generate(), idade: generateNumber()};
    // when -> quando acontecer
    const response = await request('http://localhost:3333/pets', 'post', data);
    const post = response.data;
    // then -> então
    expect(post.nome).toBe(data.nome)
    expect(post.dono).toBe(data.dono)
    expect(post.raca).toBe(data.raca)
    expect(post.idade).toBe(data.idade)
    await postService.deletePost(post.id)

});