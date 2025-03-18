const mongoose = require('mongoose')
const userModel = require('./user')

const productSchema = new mongoose.Schema({

})

const productModel = mongoose.model('products', productSchema)

module.exports = userModel