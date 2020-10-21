import express from 'express'
import { json, urlencoded } from 'body-parser'
import users from './routes/users'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(users)

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('listening on port 3000...')
  })
}

export default app
