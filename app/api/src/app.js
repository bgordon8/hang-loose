import express from 'express'
import users from './routes/users'

const app = express()

app.use(users)

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('listening on port 3000...')
  })
}

export default app
