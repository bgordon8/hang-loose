import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import users from './routes/users'
import workspaces from './routes/workspaces'
import channels from './routes/channels'
import messages from './routes/messages'
import auth from './routes/auth'

const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(users)
app.use(workspaces)
app.use(channels)
app.use(messages)
app.use(auth)

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('listening on port 3000...')
  })
}

export default app
