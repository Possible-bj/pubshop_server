import Product from '../../models/productModel.js'

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
export default async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }
  await product.remove()
  res.json({ message: 'Product removed' })
}
