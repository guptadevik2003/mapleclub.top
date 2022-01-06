module.exports.isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports.isNotAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/dashboard')
    } else {
        next()
    }
}

module.exports.isDev = (req, res, next) => {
    if (req.session.isDev) {
        next()
    } else {
        res.redirect('/dashboard')
    }
}
