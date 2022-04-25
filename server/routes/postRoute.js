const express = require('express')
const routes = express.Router()
const petsService = require('../service/postsService')

routes.get('/pets', async (req, res) => {
    const pets = await petsService.getPorts();
    res.json(pets);
})

routes.post('/pets', async (req, res) => {
    const post = req.body;
    const newPost = await petsService.savePost(post);
    res.json(newPost);
})

routes.put('/pets/:id', async (req, res) => {
    const post = req.body;
    await petsService.updatePost(req.params.id, post);
    res.end();
});

routes.delete('/pets/:id', async (req, res) => {
    await petsService.deletePost(req.params.id);
    res.end();
})

// distribuir rotas em arquivos diferentes !
module.exports = routes