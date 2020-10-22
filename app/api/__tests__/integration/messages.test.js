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

  describe('GET /messages/:id', () => {
    it('returns message by id', async () => {
      const res = await req.get('/messages/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('message')
      expect(res.body.message).toHaveProperty('id')
      expect(res.body.message.id).toBe(1)
      expect(res.body.message).toHaveProperty('channelId')
      expect(res.body.message.channelId).toBe(1)
      expect(res.body.message).toHaveProperty('authorId')
      expect(res.body.message.authorId).toBe(1)
      expect(res.body.message).toHaveProperty('content')
      expect(res.body.message.content).toBe('this is the first message!')
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('POST /messages', () => {
    it('creates new message', async () => {
      const res = await req.post('/messages').send({
        channelId: 1,
        authorId: 1,
        content: 'new created message!',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('message')
      expect(res.body.message).toHaveProperty('id')
      expect(res.body.message.id).toBe(3)
      expect(res.body.message).toHaveProperty('channelId')
      expect(res.body.message.channelId).toBe(1)
      expect(res.body.message).toHaveProperty('authorId')
      expect(res.body.message.authorId).toBe(1)
      expect(res.body.message).toHaveProperty('content')
      expect(res.body.message.content).toBe('new created message!')
      expect(res.body).toMatchSnapshot({
        message: {
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      })
    })
  })

  describe('PUT /messages/:id', () => {
    it('updates message by id', async () => {
      const res = await req.put('/messages/1').send({
        channelId: 1,
        authorId: 1,
        content: 'updated message',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('message')
      expect(res.body.message).toHaveProperty('id')
      expect(res.body.message.id).toBe(1)
      expect(res.body.message).toHaveProperty('channelId')
      expect(res.body.message.channelId).toBe(1)
      expect(res.body.message).toHaveProperty('authorId')
      expect(res.body.message.authorId).toBe(1)
      expect(res.body.message).toHaveProperty('content')
      expect(res.body.message.content).toBe('updated message')
      expect(res.body).toMatchSnapshot()
    })
  })
})
