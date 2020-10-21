import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : workspaces', () => {
  describe('GET /workspaces', () => {
    it('returns all workspaces', async () => {
      const res = await req.get('/workspaces')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('workspaces')
      expect(res.body.workspaces[0]).toHaveProperty('id')
      expect(res.body.workspaces[0].id).toBe(1)
      expect(res.body.workspaces[0]).toHaveProperty('name')
      expect(res.body.workspaces[0].name).toBe('good-guys')
      expect(res.body.workspaces[0]).toHaveProperty('cname')
      expect(res.body.workspaces[0].cname).toBe('good-guys')
      expect(res.body.workspaces[0]).toHaveProperty('ownerId')
      expect(res.body.workspaces[0].ownerId).toBe(1)
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('GET /workspaces/:id', () => {
    it('returns workspace by id', async () => {
      const res = await req.get('/workspaces/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('workspace')
      expect(res.body.workspace).toHaveProperty('id')
      expect(res.body.workspace.id).toBe(1)
      expect(res.body.workspace).toHaveProperty('name')
      expect(res.body.workspace.name).toBe('good-guys')
      expect(res.body.workspace).toHaveProperty('cname')
      expect(res.body.workspace.cname).toBe('good-guys')
      expect(res.body.workspace).toHaveProperty('ownerId')
      expect(res.body.workspace.ownerId).toBe(1)
      expect(res.body).toMatchSnapshot()
    })
  })
})
