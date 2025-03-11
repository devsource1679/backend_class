// JS module systems
// module commonJs

// const getProducts = require('./product')
//  getProducts()
// const come = require('./controller')











// const express = require('express')
// const app = express()

// app.listen(4000, ()=>(
//     console.log('listing on port 4000')
// ))

// http//localhost:4000/product

// app.get('/product', (req, res)=>{
//     res.send('hello product')
// })

// app.get('/user', (req, res)=>{
//     res.send('tolu')
// })

// app.get('/son', (req, res)=>{
//     res.send('<h1>hello world</h1>')
// })

// app.get('/', (req, res)=>{
//     res.send('hello')
//     res.json({
//        name: 'tolu'

//     })
// })















const express = require('express')
const app = express()

app.use(express.json())


const PORT = 4003

app.listen(PORT, ()=>(
    console.log('listing on port 4003')
))

app.get('/', (req, res)=>{
    res.send('welcome to aliexpress api')
})


const addProduct =  (req, res)=>{
    res.status(201).json({
        message: 'product added successfully'
    })
}

const updateProduct = (req, res)=>{
    console.log(req.body)
    res.status(201).json({
        message: 'product updated successfully'
    })
}

const deleteProduct = (req, res)=>{
    console.log(req.body)
    res.status(201).json({
        message: 'product deleted successfully'
    })
}

const getProduct = (req, res)=>{
    console.log(req.body)
    res.status(201).json({
        message: 'product deleted successfully'
    })
}

app.post('/product', addProduct)
app.put('/product', updateProduct)
app.delete('/product', deleteProduct)
app.get('/product', getProduct)



//  create a new end point for users and test with postman