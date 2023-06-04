require('dotenv').config()

const JsonProducts = require('./products.json')
const connectDB = require('./db/connect')
const Product = require('./model/product')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.insertMany(JsonProducts)
    console.log('Connected to Database...')
    process.exit(0)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

start()
