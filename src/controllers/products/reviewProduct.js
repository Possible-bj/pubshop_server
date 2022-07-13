import Product from '../../models/productModel.js'

// @desc    Review Product
// @route   POST /api/products/:id/reviews
// @access  Private
export default async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('Product not found!')
  }

  const alreadyReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString(),
  )

  if (alreadyReviewed) {
    res.status(400)
    throw new Error('Product already reviewed')
  }

  const review = {
    name: req.user.name,
    rating: Number(rating),
    comment,
    user: req.user._id,
  }

  product.reviews.push(review)
  product.numReviews = product.reviews.length
  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length

  await product.save()

  res.status(201)
  res.json({ message: 'Review added' })
}
