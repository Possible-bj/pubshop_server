import Product from '../../models/productModel.js'

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
export default async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  res.json(product)
}
