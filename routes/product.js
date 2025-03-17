const express = require('express')
const { Addproduct, getAllProducts } = require('../controllers/product')
const productRouter = express.Router()

productRouter.route('/').post(Addproduct).get(getAllProducts)


module.exports = productRouter