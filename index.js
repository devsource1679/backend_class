const express = require('express')
const app = express()

// ROUTES
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')


app.use(express.json())

const PORT = 4003

app.listen(PORT, ()=>(
    console.log('listing on port 4003')
))

// ENDPOINTS
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)

app.get('/', (req, rws)=>{
    rws.send('rxetyui')
})