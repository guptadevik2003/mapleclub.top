const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)

module.exports = ({ app, express }) => {
    express.appConfig = async () => {

        const storeSession = new MongoDBSession({
            uri: process.env.MAPLECLUB_MONGODB_URL,
            collection: 'mapleclubTopSessions'
        })
        
        app.use(express.static(`${process.cwd()}/views`))
        app.set('view-engine', 'ejs')
        app.use(express.urlencoded({ extended: false }))
        app.use(
            session({
                secret: process.env.SESSION_SECRET,
                resave: false,
                saveUninitialized: false,
                store: storeSession,
                cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, //7 Days
                name: 'MapleClub_Session'
            })
        )

    }
}
