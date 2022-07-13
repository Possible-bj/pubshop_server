import asyncHandler from 'express-async-handler'

// Controllers

import getProducts from './getProducts.js'
import getProduct from './getProduct.js'
import deleteProduct from './deleteProduct.js'
import createProduct from './createProduct.js'
import updateProduct from './updateProduct.js'
import reviewProduct from './reviewProduct.js'
import getTopRatedProducts from './getTopRatedProducts.js'

const controllers = {
  getProducts: asyncHandler(getProducts),
  getProduct: asyncHandler(getProduct),
  deleteProduct: asyncHandler(deleteProduct),
  createProduct: asyncHandler(createProduct),
  updateProduct: asyncHandler(updateProduct),
  reviewProduct: asyncHandler(reviewProduct),
  getTopProducts: asyncHandler(getTopRatedProducts),
}

export default controllers
