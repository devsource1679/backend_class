const express = require('express')
const { getAllProducts, getSingleProduct, updateProduct, deleteProduct, addProduct, searchOrFilterProducts } = require('../controllers/productController')
const productRouter = express.Router()

productRouter.route('/').get(getAllProducts).post(addProduct)
productRouter.route('/search').get(searchOrFilterProducts)
productRouter.route('/:productId').get(getSingleProduct).patch(updateProduct).delete(deleteProduct)

module.exports = productRouter