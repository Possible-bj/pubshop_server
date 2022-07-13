import express from 'express'
// import path, { dirname } from 'path'
import cors from 'cors'
import chalk from 'chalk'
import connectDB from './db/mongoose.js'
import userRoutes from './routers/userRoutes.js'
import productRoutes from './routers/productRoutes.js'
import orderRoutes from './routers/orderRoutes.js'
import uploadRoutes from './routers/uploadRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import { v2 as cloudinary } from 'cloudinary'
import morgan from 'morgan'

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/uploads', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID),
)

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.resolve(dirname(''), '/frontend/build')))
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(dirname(''), 'frontend', 'build', 'index.html')),
//   )
// } else {
app.get('/', (req, res) => {
  res.send('API is runnning...')
})
// }

app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT

app.listen(
  port,
  console.log(
    chalk.yellow.bold(
      `Server running in ${process.env.NODE_ENV} mode on port ${port}`,
    ),
  ),
)
