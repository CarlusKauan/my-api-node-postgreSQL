const express = require('express')
const routes = express.Router()
const postsService = require('../service/postsService')

routes.get('/posts', async (req, res) => {
    const posts = await postsService.getPorts();
    res.json(posts);
})

routes.get('/posts/:id', (req, res) => {
    return res.send('<h2>Hello in /:id</h2>')
})

routes.post('/posts', (req, res) => {
    return res.send('<h2>Hello in post</h2>')
})

routes.patch('/posts/:id', (req, res) => {
    return res.send('<h2>Hello in patch</h2>')
})

routes.delete('/posts/:id', (req, res) => {
    return res.send('<h2>Hello in delete</h2>')
})

// distribuir rotas em arquivos diferentes !
module.exports = routes