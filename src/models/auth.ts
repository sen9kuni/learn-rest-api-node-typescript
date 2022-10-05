import db from '../helpers/db'

export function getUserByEmail(email: string, cb: any) {
  const q: string = 'SELECT * FROM users WHERE email=$1'
  const val = [email]
  db.query(q, val, (err, res) => {
    cb(err, res.rows)
  })
}
