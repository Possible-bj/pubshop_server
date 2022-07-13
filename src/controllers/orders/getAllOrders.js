import Order from '../../models/orderModel.js'

// @desc    GET all orders
// @route   GET /api/orders
// @access  Private/Admin
export default async (req, res) => {
  const orders = await Order.find({}).populate('user', '_id name')
  res.json(orders)
}
