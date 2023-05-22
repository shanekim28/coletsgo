/* Use this file to expose your routes */
const express = require('express')
const products = require('./routes/list_route.js')
const app = express()

// Using route '/product' with everything from products, our example route

app.use(express.json());
app.use("/", products)

module.exports = app