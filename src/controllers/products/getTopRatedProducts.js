import Product from '../../models/productModel.js'

// @desc    Get top rated Products
// @route   GET /api/products/top
// @access  Public
export default async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.status(200)
  res.json(products)
}
