require('dotenv').config()
const express = require('express')
const PORT = process.env.SERVER_PORT
const app = express()
const route = require('./routes/notes')


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', route)

app.listen(PORT,()=>{
    console.log(`Server listening in PORT ${PORT}`)
})