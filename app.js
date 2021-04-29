// https://www.youtube.com/watch?v=xn9ef5pod18
const express = require('express')
const mysqlConnection = require('./connection')
const productsRoutes = require('./routes/products')
const app = express()

app.use(express.json())

app.use('/products', productsRoutes)

app.listen(3000)