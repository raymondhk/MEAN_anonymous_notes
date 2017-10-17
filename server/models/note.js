const mongoose = require('mongoose'),
Schema = mongoose.Schema,
NoteSchema = new Schema({
    content: { type: String, required: [true, "Please enter content"], minlength: [4, "Note content must be at least 4 characters long!"] },
    createdAt: { type: Date, default: new Date() }
})
const Note = mongoose.model('Note', NoteSchema)
module.exports = Note