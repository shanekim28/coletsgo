/* Use this file to expose your routes */
const express = require('express')
const products = require('./routes/example_route.js')
const app = express()

// Using route '/product' with everything from products, our example route
app.use("/product", products)

module.exports = app