const express = require('express')
const Product = require('../models/Product')
const router = express.Router()

//Route 1: Create a product
router.post('/createProduct', async (req, res) => {
  try {
    if (
      !!req.body.brand &&
      !!req.body.productID &&
      !!req.body.batchNo &&
      !!req.body.price &&
      !!req.body.dateOfManufacture
    ) {
      // Check whether the user with this email exists already
      let product = await Product.findOne({ productID: req.body.productID })
      if (product) {
        return res.status(400).json({
          error: 'Sorry a product with this product id already exists',
        })
      } else {
        // Create a new product
        product = await Product.create({
          productID: req.body.productID,
          brand: req.body.brand,
          batchNo: req.body.batchNo,
          price: req.body.price,
          dateOfManufacture: req.body.dateOfManufacture,
        })
      }

      const data = { message: 'Product created Successfully' }
      res.status(200).json(data)
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).status('Internal Server Error')
  }
})

//Route 2: Get product details
router.post('/getProduct', async (req, res) => {
  try {
    if (!!req.body.productID) {
      let product = await Product.findOne({ productID: req.body.productID })
      if (product) {
        const data = {
          id: product._id,
          brand: product.brand,
          productID: product.productID,
          batchNo: product.batchNo,
          price: product.price,
          dateOfManufacture: product.dateOfManufacture,
        }

        res.status(200).json(data)
      } else {
        res.status(404).send('Product not found')
      }
    } else {
      res.status(400).json({ message: 'Product id not found' })
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).status('Internal Server Error')
  }
})

module.exports = router
