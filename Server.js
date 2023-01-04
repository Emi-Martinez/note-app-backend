const express = require('express')
const {PORT} = require('./config')
// const PORT = 3001
const app = express()
const route = require('./routes/notes')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', route)

app.listen(PORT,()=>{
    console.log(`Server listening in PORT ${PORT}`)
})