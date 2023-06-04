require('express-async-error')
require('dotenv').config()

//initializing application...
const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const productRoutes = require('./routes/products')
const errorHandler = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//api/v1/products
//api/v1/products/static
app.use(express.json())
app.use('/api/v1/products', productRoutes)

app.use(errorHandler)
app.use(notFoundMiddleware)

//setting up port...
const port = process.env.PORT || 3000

const start = async () => {
  try {
    //connecting DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on Port --> ${port}`))
  } catch (error) {
    console.log(error.message)
  }
}

start()
