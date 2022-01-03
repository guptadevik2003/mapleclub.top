const express = require('express')
const app = express()
const fs = require('fs')
require('dotenv').config()

app.set('view-engine', 'ejs')
app.get('/', async (req, res) => {
    res.render('home.ejs')
})

// Listening to PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})