const express = require('express') 
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', require('./routes/postRoute'))

app.listen(3333, (req, res) => console.log('run in http://localhost:3333'))