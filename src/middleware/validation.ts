import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import response from '../helpers/standardRespond'

const midValidation = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return response(res, 'Validation error', error.array(), null, 400)
  }
  next()
}

export default midValidation
