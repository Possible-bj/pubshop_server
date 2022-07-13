import multer from 'multer'

const storage = multer.diskStorage({})
export const upload = multer({
  // limits:{
  //   fieldSize: 200000
  // },
  storage,
  fileFilter(req, file, cb) {
    // clg
    if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
      return cb(new Error('Image Only'))
    }
    cb(null, true)
  },
})
