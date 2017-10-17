const notes = require('../controllers/notes.js')

module.exports = (app) => {
    app.get('/notes', (req, res, next) => {
        notes.show(req, res)
    })
    app.post('/notes', (req, res, next) => {
        notes.create(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}