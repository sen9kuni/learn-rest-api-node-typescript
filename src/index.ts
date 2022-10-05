import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes'

dotenv.config()

const app: Application = express()
const port = process.env.PORT

app.use(cors())

// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).send({ data: 'hello world' })
// })

app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))

app.get('/', (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: 'Backend Zwallet running well'
  })
})

app.use('/', router)

app.use('*', (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'resource not found'
  })
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))
