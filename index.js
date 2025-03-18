const express = require('express')
const app = express()
const connectToMongoDb = require('./config/connectToDb')
connectToMongoDb()

// ROUTES
const authRouter = require('./routes/authRoutes')

app.use(express.json())

const PORT = 4003

app.listen(PORT, ()=>(
    console.log('listing on port 4003')
))

// ENDPOINTS
// /api/auth/
app.use('/api/auth', authRouter)


// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. It provides a straightforward, schema-based solution to model application data.