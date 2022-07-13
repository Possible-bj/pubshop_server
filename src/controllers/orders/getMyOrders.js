import Order from '../../models/orderModel.js'

// @desc    GET logged in users order
// @route   GET /api/orders/myorders
// @access  Private
export default async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
}
