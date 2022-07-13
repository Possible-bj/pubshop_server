import express from 'express'
import controllers from '../controllers/products/products.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

const {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  reviewProduct,
  getTopProducts,
} = controllers

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/top').get(getTopProducts)
router.route('/:id/reviews').post(protect, reviewProduct)
router
  .route('/:id')
  .get(getProduct)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
export default router
