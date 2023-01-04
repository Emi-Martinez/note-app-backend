const Note = require('../models/note')

const getAllNotes = async (req,res)=>{
    try {
        const [allNotes] = await Note.queryAllNotes()

        res.status(200).json({succes:true, data:allNotes})
    } catch (error) {
        console.log(error)
    } 
}

const postNote = async (req,res)=>{
    try {
        const {newNote} = req.body
        const note = new Note(newNote)
        
        if(note.insertNote() === false){
            const [allNotes] = await Note.queryAllNotes()
            return res.status(200).json({succes:false, data:allNotes})
        }
        
        const [allNotes] = await Note.queryAllNotes()
        return res.status(200).json({succes:true, data:allNotes})
    } catch (error) {
        console.log(error)
    }
}

const putNote = async (req,res)=>{
    try {
        const {id} = req.params
        const {updatedNote} = req.body
        const note = new Note({...updatedNote, id:id})

        if(note.updateNote() === false){
            const [allNotes] = await Note.queryAllNotes()
            return res.status(200).json({succes:false, data:allNotes})
        }       

        const [allNotes] = await Note.queryAllNotes()

        return res.status(200).send({succes:true, data:allNotes})

    } catch (error) {
        console.log(error)
    }    
}

const dltNote = async (req,res)=>{
    try {
        const {id} = req.params
        Note.deleteNote(id)

        const [allNotes] = await Note.queryAllNotes()

        res.status(200).json({succes:true, data:allNotes})
    } catch (error) {
        console.log(error)
    }    
}

module.exports = {
    getAllNotes,
    postNote,
    putNote,
    dltNote
}