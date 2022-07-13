import { v2 as cloudinary } from 'cloudinary'

// @desc  upload a file
// @route GET /api/uploads
// @access Private/Admin
export default async (req, res) => {
  /////////////////////////
  // Uploads an image file
  /////////////////////////

  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
    folder: 'pubshop',
  }

  // Upload the image
  const result = await cloudinary.uploader.upload(req.file.path, options)
  // console.log(result)
  res.status(200)
  res.json(result)
}
