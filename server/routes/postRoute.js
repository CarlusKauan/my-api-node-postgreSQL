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

// routes.get('/pets/:id', (req, res) => {
//     return res.send('<h2>Hello in /:id</h2>')
// })

// 

// routes.patch('/pets/:id', (req, res) => {
//     return res.send('<h2>Hello in patch</h2>')
// })

// routes.delete('/pets/:id', (req, res) => {
//     return res.send('<h2>Hello in delete</h2>')
// })

// distribuir rotas em arquivos diferentes !
module.exports = routes