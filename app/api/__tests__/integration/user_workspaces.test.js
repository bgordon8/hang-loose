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
})
