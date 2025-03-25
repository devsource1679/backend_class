const { json } = require('express')
const productModel = require('../models/product')

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        if(!products){
            res.status(400).json({
                status: 'error',
                message: 'unable to fetch products'
            })
        }
        res.status(200).json({
            status: 'success',
            data: products
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}

const addProduct = async (req, res)=>{
    try {
        const product = await productModel.create(req.body)
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'product not created'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            message: 'product created successfully.',
            product
        })
    } catch (error) {
        console.log(error);
    }
}

// GET SINGLE PRODUCT
const getSingleProduct = async (req, res)=>{
    const {productId} = req.params
    try {
        const product = await productModel.findById(productId)
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'unable to fetch product'
            })
        }
        res.status(200).json({
            status: 'success',
            product
        })
    } catch (error) {
        console.log(error)
    }
}

const updateProduct = async (req, res)=>{
    const {productId} = req.params
    try {
        // {name: 'babs'}
        const product = await productModel.findByIdAndUpdate(productId, req.body)
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'unable to update product'
            })
        }
        res.status(200).json({
            status: 'success',
            product
        })

    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res)=>{
    const {productId} = req.params
    try {
       await productModel.findByIdAndDelete(productId)
        res.status(200).json({
            status: 'success',
            messaage: 'product has been deleted'
        })

    } catch (error) {
        console.log(error)
    }
}



// find({name: 'test'}) return all documents that matches the query
const searchOrFilterProducts = async (req, res) => {
    const {keyword, minPrice, maxPrice} = req.query 
    let query = {}
   
    if(keyword){
        query.$or = [{name: {$regex: keyword, $options: 'i'}}, {category: {$regex: keyword, $options: 'i'}}, {description: {$regex: keyword, $options: 'i'}}]
    }

    if(minPrice){
        query.price = {$gte: parseFloat(minPrice)}
    }
    if(maxPrice){
        query.price = {$lte: parseFloat(maxPrice)}
    }

    try {
        const results = await productModel.find(query)
        res.status(200).json({
            count: results.length,
            status: 'success',
            results
        })
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    addProduct,
    searchOrFilterProducts
}