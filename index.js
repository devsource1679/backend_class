const express = require('express')
const app = express()
const cors = require('cors')
const connectToMongoDb = require('./config/connectToDb')
connectToMongoDb()

// ROUTES
const authRouter = require('./routes/authRoutes')

app.use(express.json()) 
app.use(cors())

const PORT = 4003

app.listen(PORT, ()=>( 
    console.log('listening on port 4003')
))

// ENDPOINTS
// /api/auth/
// http://localhost:4003/api

app.get('/api/', (req, res)=>{
    res.send('Welcome to Aliexpress API!')
})
app.use('/api/auth', authRouter)


// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. It provides a straightforward, schema-based solution to model application data.