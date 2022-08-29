import app from '../src/app.js'
import request from 'supertest'

describe('DELETE endpoints', () => {
  describe('DELETE /users/:id', () => {
    it('should delete user by id', async () => {
      const EXPECTED_DATA = {
        message: `user successfully deleted`,
        usersCount: 2
      }
      const response = await request(app).delete('/users/80')

      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(EXPECTED_DATA)
    })

    it('should return a bad request', async () => {
      const EXPECTED_DATA = {
        message: `user didn't exist`
      }

      const response = await request(app).delete('/users/80')

      expect(response.statusCode).toBe(400)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual(EXPECTED_DATA)
    })
  })
})