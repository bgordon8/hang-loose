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

  describe('GET /channels/:id', () => {
    it('returns channel by id', async () => {
      const res = await req.get('/channels/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('channel')
      expect(res.body.channel).toHaveProperty('id')
      expect(res.body.channel.id).toBe(1)
      expect(res.body.channel).toHaveProperty('workspaceId')
      expect(res.body.channel.workspaceId).toBe(1)
      expect(res.body.channel).toHaveProperty('name')
      expect(res.body.channel.name).toBe('general')
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('POST /channels', () => {
    it('creates new channel', async () => {
      const res = await req.post('/channels').send({
        name: 'testchannel',
        workspaceId: 1,
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('channel')
      expect(res.body.channel).toHaveProperty('id')
      expect(res.body.channel.id).toBe(4)
      expect(res.body.channel).toHaveProperty('name')
      expect(res.body.channel.name).toBe('testchannel')
      expect(res.body).toMatchSnapshot({
        channel: {
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      })
    })
  })

  describe('PUT /channels/:id', () => {
    it('updates channel by id', async () => {
      const res = await req.put('/channels/1').send({
        name: 'updatedname',
      })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('channel')
      expect(res.body.channel).toHaveProperty('id')
      expect(res.body.channel.id).toBe(1)
      expect(res.body.channel).toHaveProperty('name')
      expect(res.body.channel.name).toBe('updatedname')
      expect(res.body).toMatchSnapshot()
    })
  })

  describe('DELETE /channels/:id', () => {
    it('deletes channel by id', async () => {
      const res = await req.del('/channels/1')

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body.status).toBe('success')
      expect(res.body).toHaveProperty('channel')
      expect(res.body.channel).toHaveProperty('id')
      expect(res.body.channel.id).toBe(1)
      expect(res.body.channel).toHaveProperty('name')
      expect(res.body.channel.name).toBe('general')
      expect(res.body.channel).toHaveProperty('workspaceId')
      expect(res.body.channel.workspaceId).toBe(1)
      expect(res.body).toMatchSnapshot()
    })
  })
})
