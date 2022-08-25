import app from '../src/app.js'
import request from 'supertest'

describe('GET /status', () => {
  it('Should respond with json status message', async () => {
    const response = await request(app).get('/status')
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual({ status: 'server is up!' })
  })
})