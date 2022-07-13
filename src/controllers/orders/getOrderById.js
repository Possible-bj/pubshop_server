import Order from '../../models/orderModel.js'

// @desc GET Order by ID
// @route GET /api/orders/:id
// @access Private
export default async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email',
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
}
