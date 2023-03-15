require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./db')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const person = require('./person')
const app = express()

// Db Connection
connection()

//middleware
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8000
app.listen(port,() => {
    console.log(`server started ${port}`)
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
console.log(person)