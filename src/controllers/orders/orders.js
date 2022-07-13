import asyncHandler from 'express-async-handler'

// Controllers
import createOrder from './createOrder.js'
import getOrderById from './getOrderById.js'
import getMyOrders from './getMyOrders.js'
import payOrder from './payOrder.js'
import getAllOrders from './getAllOrders.js'
import updateOrderToDelivered from './updateOrderToDelivered.js'

const controllers = {
  createOrder: asyncHandler(createOrder),
  getOrderById: asyncHandler(getOrderById),
  getMyOrders: asyncHandler(getMyOrders),
  payOrder: asyncHandler(payOrder),
  getAllOrders: asyncHandler(getAllOrders),
  updateOrderToDelivered: asyncHandler(updateOrderToDelivered),
}

export default controllers
