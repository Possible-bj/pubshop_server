import asyncHandler from 'express-async-handler'

// Controllers

import cloudinaryCreate from './cloudinaryCreate.js'

const controllers = {
  cloudinaryCreate: asyncHandler(cloudinaryCreate),
}

export default controllers
