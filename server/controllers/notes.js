const mongoose = require('mongoose'),
    Note = mongoose.model('Note')

module.exports = {
    show: (req, res) => {
        Note.find({})
            .then(notes => res.json(notes))
            .catch(err => {
                console.log('error')
                res.status(500).json(err)
            })
        },
    create: (req, res) => {
        let note = new Note(req.body)
        console.log(note)
        note.save((err) => {
            if(err){
                console.log('error')
                return res.redirect('/')
            }
            console.log('success')
            return res.redirect('/')
        })
    }
}