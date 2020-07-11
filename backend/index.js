const express = require('express')
const server = express()
const PORT = 3000

server.post('/upload', (req,res) => {
    res.json(req.body)
})

server.listen(PORT, () => console.log(`Server is started. Port = ${PORT}`))