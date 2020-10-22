import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : messages', () => {
  describe('GET /messages', () => {
    it('returns all messages', async () => {
      const res = await req.get('/messages')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('messages')
      expect(res.body.messages[0]).toHaveProperty('id')
      expect(res.body.messages[0].id).toBe(1)
      expect(res.body.messages[0]).toHaveProperty('channelId')
      expect(res.body.messages[0].channelId).toBe(1)
      expect(res.body.messages[0]).toHaveProperty('authorId')
      expect(res.body.messages[0].authorId).toBe(1)
      expect(res.body.messages[0]).toHaveProperty('content')
      expect(res.body.messages[0].content).toBe('this is the first message!')
      expect(res.body).toMatchSnapshot()
    })
  })
})
