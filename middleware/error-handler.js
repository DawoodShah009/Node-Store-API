const CustomApiError = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  res.status(500).json({ msg: 'Something went wrong...' })
}
module.exports = errorHandlerMiddleware
