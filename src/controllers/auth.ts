import { getUserByEmail } from '../models/auth'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import response from '../helpers/standardRespond'

export const login = async (req: any, res: any) => {
  const { email, password } = req.body
  getUserByEmail(email, (err: any, results: any) => {
    if (results.length < 1) {
      return response(res, 'User not found', null, null, 400)
    }

    const user = results[0]

    bcrypt
      .compare(password, user.password)
      .then((cpRes) => {
        if (cpRes) {
          const token = jwt.sign({ id: user.id }, process.env.APP_SECRET || 'secretKey', { expiresIn: '24h' })
          const id = user.id
          const pin = user.pin
          const email = user.email
          return response(res, 'Login success', { id, pin, token, email }, null)
        }
        return response(res, 'Email or Password not match', null, null, 400)
      })
      .catch(() => {
        return response(res, 'Email or Password not match', null, null, 400)
      })
  })
}
