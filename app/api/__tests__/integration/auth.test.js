import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : auth', () => {
  describe('POST /auth/register', () => {
    it('registers a new user and returns a token', async () => {
      const res = await req.post('/auth/register').send({
        email: 'test@email.com',
        username: 'testUser',
        password: 'password123',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('token')
      expect(res.body).toMatchSnapshot({
        token: expect.any(String),
      })
    })
  })

  describe('POST /auth/login', () => {
    it('logs in a user and returns a token', async () => {
      const res = await req.post('/auth/login').send({
        email: 'leo@email.com',
        password: 'password123',
      })

      console.log(res.body)
      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('token')
      expect(res.body).toMatchSnapshot({
        token: expect.any(String),
      })
    })
  })
})
