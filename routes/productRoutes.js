const express = require('express')
const { getAllProducts, getSingleProduct, updateProduct, deleteProduct, addProduct, searchOrFilterProducts } = require('../controllers/productController')
const isLoggedIn = require('../middlewares/isLoggedIn')
const middleware1 = require('../middlewares/middleware1')
const middleware2 = require('../middlewares/middleware2')
const isAdmin = require('../middlewares/isAdmin')
const productRouter = express.Router()

productRouter.route('/').get(getAllProducts).post(isLoggedIn, isAdmin, addProduct)
productRouter.route('/search').get(searchOrFilterProducts)
productRouter.route('/:productId').get(getSingleProduct).patch(isLoggedIn, updateProduct).delete(deleteProduct)

module.exports = productRouter