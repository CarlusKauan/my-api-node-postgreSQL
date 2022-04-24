const express = require('express') 

const app = express()

app.use('/', require('./routes/postRoute'))

app.listen(3333, (req, res) => console.log('run in http://localhost:3333'))