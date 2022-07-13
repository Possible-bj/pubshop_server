import Order from '../../models/orderModel.js'

// @desc    Update Order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
export default async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
}
