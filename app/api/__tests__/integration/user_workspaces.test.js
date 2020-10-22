import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : user_workspaces', () => {
  describe('routes : user_workspaces', () => {
    describe('GET /user_workspaces', () => {
      it('returns all user_workspaces', async () => {
        const res = await req.get('/user_workspaces')

        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('status')
        expect(res.body.status).toBe('success')
        expect(res.body).toHaveProperty('user_workspaces')
        expect(res.body.user_workspaces[0]).toHaveProperty('id')
        expect(res.body.user_workspaces[0].id).toBe(1)
        expect(res.body.user_workspaces[0]).toHaveProperty('workspaceId')
        expect(res.body.user_workspaces[0].workspaceId).toBe(1)
        expect(res.body.user_workspaces[0]).toHaveProperty('userId')
        expect(res.body.user_workspaces[0].userId).toBe(1)
        expect(res.body).toMatchSnapshot()
      })
    })
  })

  describe('GET /user_workspaces/:id', () => {
    it('returns user_workspace by id', async () => {
      const res = await req.get('/user_workspaces/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user_workspace')
      expect(res.body.user_workspace).toHaveProperty('id')
      expect(res.body.user_workspace.id).toBe(1)
      expect(res.body.user_workspace).toHaveProperty('workspaceId')
      expect(res.body.user_workspace.workspaceId).toBe(1)
      expect(res.body.user_workspace).toHaveProperty('userId')
      expect(res.body.user_workspace.userId).toBe(1)
      expect(res.body).toMatchSnapshot()
    })
  })

  //POST
  describe('POST /user_workspaces', () => {
    it('creates new user_workspace', async () => {
      const res = await req.post('/user_workspaces').send({
        workspaceId: 2,
        userId: 2,
      })
      console.log(res.body)
      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('user_workspace')
      expect(res.body.user_workspace).toHaveProperty('id')
      expect(res.body.user_workspace.id).toBe(4)
      expect(res.body.user_workspace).toHaveProperty('userId')
      expect(res.body.user_workspace.userId).toBe(2)
      expect(res.body.user_workspace).toHaveProperty('workspaceId')
      expect(res.body.user_workspace.workspaceId).toBe(2)
      expect(res.body).toMatchSnapshot({
        user_workspace: {
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      })
    })
  })
})
