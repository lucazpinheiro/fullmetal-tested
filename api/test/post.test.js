import app from '../src/app.js'
import request from 'supertest'

describe('POST endpoints', () => {
  describe('POST /users', () => {
    it('should create new users', async () => {
      const EXPECTED_DATA = {
        id: '111',
        name: 'xyz',
        postCount: 0
      }

      const response = await request(app)
        .post('/users')
        .send({ name: 'xyz' })
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(EXPECTED_DATA)
    })

    it('should return a bad request', async () => {
      const EXPECTED_DATA = {
        message: `missing 'name' property`
      }

      const response = await request(app)
        .post('/users')
        .send({})
      expect(response.statusCode).toBe(400)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(EXPECTED_DATA)
    })
  })
})