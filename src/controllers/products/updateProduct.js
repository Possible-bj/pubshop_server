import Product from '../../models/productModel.js'

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
export default async (req, res) => {
  const { name, price, image, brand, category, countInStock, description } =
    req.body

  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('Product not found!')
  }

  product.name = name
  product.price = price
  product.image = image
  product.brand = brand
  product.category = category
  product.countInStock = countInStock
  product.description = description

  const updatedProduct = await product.save()

  res.status(200)
  res.json(updatedProduct)
}
