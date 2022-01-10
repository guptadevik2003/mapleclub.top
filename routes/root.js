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

router.get('/login', isNotAuth, async (req, res) => {
    res.render('login.ejs')
})
router.get('/register', isNotAuth, async (req, res) => {
    res.render('register.ejs')
})

router.get('/dashboard', isAuth, async (req, res) => {
    res.send('<h1>Welcome to dashboard</h1>')
})

router.get('/dev/dashboard', isAuth, isDev, async (req, res) => {
    res.send('<h1>Welcome to Developer dashboard</h1>')
})

router.get('/dev/secret/phb', isAuth, async (req, res) => {
    res.render('phb.ejs')
})

module.exports = router
