import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : users', () => {
  describe('GET /users', () => {
    it('returns all users', async () => {
      const res = await req.get('/users')
      console.log(res.body)
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

  describe('GET /users/:id', () => {
    it('returns user by id', async () => {
      const res = await req.get('/users/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user')
      expect(res.body.user).toHaveProperty('id')
      expect(res.body.user.id).toBe(1)
      expect(res.body.user).toHaveProperty('email')
      expect(res.body.user.email).toBe('leo@email.com')
      expect(res.body.user).toHaveProperty('username')
      expect(res.body.user.username).toBe('Leonardo')
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('POST /users', () => {
    it('creates new user', async () => {
      const res = await req.post('/users').send({
        email: 'test@email.com',
        username: 'newUser',
        password: 'passwordtest',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user')
      expect(res.body.user).toHaveProperty('id')
      expect(res.body.user.id).toBe(5)
      expect(res.body.user).toHaveProperty('email')
      expect(res.body.user.email).toBe('test@email.com')
      expect(res.body.user).toHaveProperty('username')
      expect(res.body.user.username).toBe('newUser')
      expect(res.body).toMatchSnapshot({
        user: {
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      })
    })
  })

  describe('PUT /users/:id', () => {
    it('updates user by id', async () => {
      const res = await req.put('/users/1').send({
        email: 'updated@email.com',
        username: 'updatedUser',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user')
      expect(res.body.user).toHaveProperty('id')
      expect(res.body.user.id).toBe(1)
      expect(res.body.user).toHaveProperty('email')
      expect(res.body.user.email).toBe('updated@email.com')
      expect(res.body.user).toHaveProperty('username')
      expect(res.body.user.username).toBe('updatedUser')
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('DELETE /users/:id', () => {
    it('deletes user by id', async () => {
      const res = await req.del('/users/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user')
      expect(res.body.user).toHaveProperty('id')
      expect(res.body.user.id).toBe(1)
      expect(res.body.user).toHaveProperty('email')
      expect(res.body.user.email).toBe('leo@email.com')
      expect(res.body.user).toHaveProperty('username')
      expect(res.body.user.username).toBe('Leonardo')
      expect(res.body).toMatchSnapshot()
    })
  })
})
