import express from 'express'
import controllers from '../controllers/orders/orders.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

const {
  createOrder,
  getOrderById,
  payOrder,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} = controllers
// router.post('/login', authUser) would work as well.
router.route('/').post(protect, createOrder).get(protect, admin, getAllOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, payOrder)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
