import supertest from 'supertest'
import app from '../src/app'

const request = supertest(app)

describe('routes : main', () => {
    describe('GET /', () => {
        it('returns hello world message', async () => {
            const res = await request.get("/")

            expect(res.status).toBe(200)
            expect(res.body).toHaveProperty('message')
            expect(res.body.message).toBe('hello world!!!! thats whats up!!!')
        })
    })
})