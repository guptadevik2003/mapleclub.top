module.exports = ({ app, express }) => {
    express.useRoute = async () => {

        // Import Routes
        const rootRoute = require(`${process.cwd()}/routes/root`)
        const apiRoute = require(`${process.cwd()}/routes/api`)
        const downloadsRoute = require(`${process.cwd()}/routes/downloads`)

        // Using Routes
        app.use('/', rootRoute)
        app.use('/api', apiRoute)
        app.use('/downloads', downloadsRoute)

    }
}
