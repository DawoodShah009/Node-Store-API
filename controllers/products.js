const Product = require('../model/product')

// const Product = require('../model/product')

const getAllProductsStatic = async (req, res) => {
  product = await Product.find()
  res.status(200).json({ product })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query
  const queryObjectList = {}

  if (featured) {
    queryObjectList.featured = featured === 'true' ? true : false
  }
  if (name) {
    queryObjectList.name = { $regex: name, $options: 'i' }
  }
  if (company) {
    queryObjectList.company = company
  }
  // console.log(numericFilters)
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(
      regEx,
      (match) => `_${operatorMap[match]}_`
    )
    const options = ['price', 'rating']
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('_')
      if (options.includes(field)) {
        queryObjectList[field] = { [operator]: Number(value) }
      }
    })
  }
  // console.log(queryObjectList)
  let result = Product.find(queryObjectList)

  if (sort) {
    const sortList = sort.split(',').join(' ')
    // console.log(sortList)
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }
  // const products = await Product.find(queryObjectList)

  if (fields) {
    fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 8
  const skip = (page - 1) * limit

  resut = result.skip(skip).limit(limit)
  const products = await result
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
