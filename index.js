const express = require('express')
const app = express()
const fs = require('fs')
require('dotenv').config()

const functions = fs.readdirSync(`${process.cwd()}/functions`).filter(file => file.endsWith('.js'))
for (file of functions) {
    require(`${process.cwd()}/functions/${file}`)({ app, express })
}

// Init Functions
express.dbLogin()
express.appConfig()
express.useRoute()

// Listening to PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
