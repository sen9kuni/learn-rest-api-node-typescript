import express, { Application, Request, Response, NextFunction } from 'express'
import { login } from '../controllers/auth'
import { loginRule } from './validator/auth'
import validator from '../middleware/validation'

const auth = express.Router()

auth.get('/hello', (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: 'Hello from auth'
  })
})

auth.post('/login', loginRule, validator, login)

export default auth
