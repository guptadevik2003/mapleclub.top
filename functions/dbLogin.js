const mongoose = require('mongoose')

module.exports = ({ app, express }) => {
    express.dbLogin = async () => {

        mongoose.Promise = global.Promise
        mongoose.connect(process.env.MAPLECLUB_MONGODB_URL)

        mongoose.connection.on('connected', async () => {
            console.log(`Connected to Project MapleClub Database.`)
        })

        mongoose.connection.on('disconnected', async () => {
            console.log(`Disconnected from Project MapleClub Database.`)
        })

        mongoose.connection.on('err', async (err) => {
            console.log(err)
        })

    }
}
