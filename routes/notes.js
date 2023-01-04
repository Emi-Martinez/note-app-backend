const express = require('express')
const route = express.Router()
const {
    getAllNotes,
    postNote,
    putNote,
    dltNote
} = require('../controllers/notes')

route.route('/api/notes').get(getAllNotes).post(postNote)
route.route('/api/notes/:id').put(putNote).delete(dltNote)

module.exports = route