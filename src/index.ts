import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const port = process.env.PORT

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'hello world' })
})

app.use('*', (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'resource not found'
  })
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))
