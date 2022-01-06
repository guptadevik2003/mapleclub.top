const express = require('express')
const userSchema = require(`${process.cwd()}/schemas/user`)
const bcrypt = require('bcrypt')
const { isAuth, isNotAuth, isDev } = require(`${process.cwd()}/otherFunctions/authValidator`)

const router = express.Router()

router.get('/', async (req, res) => {
    res.json({ message: 'mapleclub_api_working' })
})

router.post('/login', isNotAuth, async (req, res) => {
    const { useremail, userpassword } = req.headers

    let userData = await userSchema.findOne({ email: useremail })
    if (!userData) {
        return res.json({ response: 'email_not_found' })
    }

    let comparePassword = await bcrypt.compare(userpassword, userData.password)
    if (comparePassword) {
        req.session.isAuth = true
        req.session.email = userData.email
        if (userData.isDev === 'yes') {
            req.session.isDev = true
        }
        return res.json({ response: 'logged_in' })
    } else {
        return res.json({ response: 'wrong_password' })
    }
})

router.post('/register', isNotAuth, async (req, res) => {
    const { username, useremail, userpassword } = req.headers

    let userData = await userSchema.findOne({ email: useremail })
    if (userData) {
        return res.json({ response: 'email_already_exists' })
    }

    try {

        let hashedPasswrd = await bcrypt.hash(userpassword, 10)
        let newUser = await new userSchema({
            name: username,
            email: useremail,
            password: hashedPasswrd
        })
        await newUser.save()
        return res.json({ response: 'register_success' })

    } catch (err) {
        console.log(err)
        return res.json({ response: 'error_occured' })
    }
})

module.exports = router
