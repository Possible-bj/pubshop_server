import Product from '../../models/productModel.js'

// @desc    Create product
// @route   POST /api/products
// @access  Private/Admin
export default async (req, res) => {
  const product = new Product({
    rating: 0,
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/airpods.jpg',
    brand: 'Sample brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description',
  })
  const createdProduct = await product.save()

  res.status(201)
  res.json(createdProduct)
}
