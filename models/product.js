const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required']
    },
    price: {
        type: Number,
        required: [true, 'Product price required']
    },
    category: {
        type: String,
        enum: ['gadgets', 'fashion', 'electronics']
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    description: {
        type: String
    }
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel