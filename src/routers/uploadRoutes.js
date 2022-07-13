import express from 'express'
import { upload } from '../utils/multer/uploads.js'
import controllers from '../controllers/uploads/uploads.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()
const { cloudinaryCreate } = controllers

router.post('/', protect, admin, upload.single('image'), cloudinaryCreate)

export default router
