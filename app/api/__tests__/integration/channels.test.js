import supertest from 'supertest'
import app from '../../src/app'

const req = supertest(app)

describe('routes : channels', () => {
  describe('GET /channels', () => {
    it('returns all channels', async () => {
      const res = await req.get('/channels')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('channels')
      expect(res.body.channels[0]).toHaveProperty('id')
      expect(res.body.channels[0].id).toBe(1)
      expect(res.body.channels[0]).toHaveProperty('workspaceId')
      expect(res.body.channels[0].workspaceId).toBe(1)
      expect(res.body.channels[0]).toHaveProperty('name')
      expect(res.body.channels[0].name).toBe('general')
      expect(res.body).toMatchSnapshot()
    })
  })
})
