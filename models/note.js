const con = require('../db/conecction')

class Note {
    constructor(note){
        this.id = note.id
        this.title = note.title
        this.content = note.content
        this.tp = note.tp
        this.update_date = note.update_date
    }

    static queryAllNotes(){
        const query = 'SELECT id,title,content,tp,date_format(update_date,"%d %b, %Y") AS update_date FROM note'

        return con.query(query)
    }

    insertNote(){
        const query = `INSERT INTO note(title, content,tp,update_date)
        values(
            "${this.title}",
            "${this.content}",
            "${this.tp}",
            now()
        )`

        if(this.tp.length >= 7 || this.title.length >= 100 || this.content.length >= 510){
            return false
        }

        return con.query(query)
    }

    updateNote(){
        const query = `UPDATE note
        SET title = "${this.title}",
        content = "${this.content}",
        tp = "${this.tp}",
        update_date = now()
        WHERE id = ${this.id}`

        if(this.tp.length >= 7 || this.title.length >= 100 || this.content.length >= 510){
            return false
        }

        return con.query(query)
    }

    static deleteNote(id){
        const query = `DELETE FROM note WHERE id = ${id}`

        return con.query(query)
    }
}

module.exports = Note
