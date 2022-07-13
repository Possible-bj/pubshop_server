import express from 'express'
import controllers from '../controllers/uploads/uploads.js'
import { admin, protect } from '../middleware/authMiddleware.js'
import { upload } from '../utils/multer/uploads.js'

const router = express.Router()
const { cloudinaryCreate } = controllers

router.post('/', protect, admin, upload.single('image'), cloudinaryCreate)

export default router
