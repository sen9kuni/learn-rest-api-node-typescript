import { body } from 'express-validator'
import bcrypt from 'bcrypt'

export const loginRule = [
  body('email').isEmail().withMessage('email format invailid'),
  body('password').isLength({ min: 8 }).withMessage('Password length minimal 8 character')
]
