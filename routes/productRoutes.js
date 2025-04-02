const express = require('express')
const { getAllProducts, getSingleProduct, updateProduct, deleteProduct, addProduct, searchOrFilterProducts } = require('../controllers/productController')
const isLoggedIn = require('../middlewares/isLoggedIn')
const productRouter = express.Router()

productRouter.route('/').get(getAllProducts).post(isLoggedIn,  addProduct)
productRouter.route('/search').get(searchOrFilterProducts)
productRouter.route('/:productId').get(getSingleProduct).patch(isLoggedIn, updateProduct).delete(deleteProduct)

module.exports = productRouter