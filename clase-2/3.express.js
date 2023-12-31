const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path = require('path')

const PORT = process.env.PORT ?? 1108

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.get('/image', (req, res) => {
    const img = path.join(__dirname, './Rinne_Sharingan_Purple.png')
    res.sendFile(img)
})

app.post('/pokemon', (req, res) => {
    // req.body deberíamos guardar en bbdd
    res.status(201).json(req.body)
})

// la última a la que va a llegar
app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})
