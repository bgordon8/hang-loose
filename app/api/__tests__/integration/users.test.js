import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : users', () => {
  describe('GET /users', () => {
    it('returns all users', async () => {
      const res = await req.get('/users')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('users')
      expect(res.body.users[0]).toHaveProperty('id')
      expect(res.body.users[0].id).toBe(1)
      expect(res.body.users[0]).toHaveProperty('email')
      expect(res.body.users[0].email).toBe('leo@email.com')
      expect(res.body.users[0]).toHaveProperty('username')
      expect(res.body.users[0].username).toBe('Leonardo')
      expect(res.body).toMatchSnapshot()
    })
  })
})
