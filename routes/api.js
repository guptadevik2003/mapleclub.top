const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.json({ message: 'mapleclub_api_working' })
})

module.exports = router
