import app from '../src/app.js'
import request from 'supertest'

describe('PUT endpoints', () => {
  describe('PUT /users/:id', () => {
    it('should update user by id', async () => {
      const NEW_DATA = {
        id: '80',
        name: 'bbb new name',
        postCount: 23
      }

      const response = await request(app)
        .put('/users/80')
        .send(NEW_DATA)
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(NEW_DATA)
    })

    it('should return a bad request', async () => {
      const EXPECTED_DATA = {
        message: `data was not provided`
      }

      const response = await request(app)
        .put('/users/80')
        .send({})
      expect(response.statusCode).toBe(400)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(EXPECTED_DATA)
    })
  })
})