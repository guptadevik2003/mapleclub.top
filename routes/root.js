const express = require('express')
const { isAuth, isNotAuth, isDev } = require(`${process.cwd()}/otherFunctions/authValidator`)

const router = express.Router()

router.get('/arc-sw.js', async (req, res) => {
    res.sendFile(`${process.cwd()}/views/arc-sw.js`)
})

router.get('/', async (req, res) => {
    res.render('home.ejs')
})
router.get('/home', async (req, res) => {
    res.redirect('/')
})

module.exports = router
