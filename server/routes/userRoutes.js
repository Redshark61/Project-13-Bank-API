import express from 'express'
import userController from '../controllers/userController.js'
import tokenValidation from '../middleware/tokenValidation.js'
const router = express.Router()

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation,
  userController.updateUserProfile
)

export default router
